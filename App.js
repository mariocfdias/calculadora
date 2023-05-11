import { StyleSheet, Text, View } from 'react-native';
import Button from "./components/Button"
import { useState } from 'react';
import {buttons, getOperator} from "./utils"
const range = (start, end, length = end - start + 1) => Array.from({ length }, (_, i) => start + i)


export default function App() {
  const [firstOperator, setFirstOperator] = useState("")
  const [operation, setOperation] = useState("")
  const [secondOperator, setSecondOperator] = useState("")
  const [lastOperation, setLastOperation] = useState("")
  const [zeroDivisionFlag, setZeroDivisionFlag] = useState(false)
  return (
    <View style={styles.container}>
      <View style={styles.visorContainer}>
        <View style={styles.historyContainer}>

           <Text style={styles.historyText}>
              {lastOperation}
            </Text>


        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>

            {zeroDivisionFlag && "Impossivel dividir por zero"}
            {`${firstOperator} ${operation} ${secondOperator}`}
          </Text>

        </View>

      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.column}>

          {range(0, 4).map((row) => {
            return <View style={styles.row}>
              {range(0, 3).map((column) => {
                return <Button
                color={buttons[row * 4 + column].color}
                pressCb={() => {
                  const buttonPressed = buttons[row * 4 + column]
                  switch(buttonPressed.type){
                    case "NUMBER":
                    !operation ? setFirstOperator(
                      firstOperator + buttons[row * 4 + column].text
                      ) : setSecondOperator(
                        secondOperator + buttons[row * 4 + column].text
                      )
                    break
                    case "OPERATION":
                      if(secondOperator){
                        if(getOperator(operation) == "/" && secondOperator == "0"){
                          setZeroDivisionFlag(true)
                        }
                        else{
                          setFirstOperator(
                            eval(`${firstOperator} ${getOperator(operation)} ${secondOperator}`)
                            )
                            setOperation(buttons[row * 4 + column].text) 
                            setSecondOperator("")
                            setLastOperation(`${firstOperator} ${operation} ${secondOperator}`)

                        }

                      }else{
                        setOperation(buttons[row * 4 + column].text) 
                                        
                      }

                      
                     

                      break
                    case "CLEAR":
                      setFirstOperator("")
                      setOperation("")
                      setSecondOperator("") 
                      setLastOperation("")
                      setZeroDivisionFlag(false)
                    break
                    case "EQUALS":
                      if(getOperator(operation) == "/" && secondOperator == "0"){
                        setZeroDivisionFlag(true)
                      }
                      else{
                      setFirstOperator(
                        eval(`${firstOperator} ${getOperator(operation)} ${secondOperator}`)
                        )
                        setOperation("") 
                        setSecondOperator("")
                        setLastOperation(`${firstOperator} ${operation} ${secondOperator}`)
                      }
                    break;
                    case "UNITOPERATION":
                      if(buttonPressed.text == "%" && firstOperator){
                        setFirstOperator(
                          eval(`${firstOperator} / 100`)
                        )
                      }
                      else if(buttonPressed.text == "+/-" && firstOperator){
                        setFirstOperator(
                          eval(`${firstOperator} * -1`)
                        )
                      }
                      
                      break;
                  }
                }}
                >
                  {buttons[row * 4 + column].text}
                </Button>
              })}



            </View>
          })}




        </View>



      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#1e1e1e"
  },
  visorContainer: {
    backgroundColor: "#1e1e1e",
    flex: 4,
    width: "100%"
  },
  historyContainer: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 10
  },
  resultContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 10
  },
  historyText: {
    fontSize: 26,
    color: "#bfc1c3"
  },
  resultText: {
    fontSize: 54,
    fontWeight: 800,
    color: "#fffefe"
  },
  buttonsContainer: {
    flex: 6, backgroundColor: "#3f3d41",
    flexWrap: 'wrap', flexDirection: "row",
    gap: 10,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    justifyContent: "space-between", alignContent: "space-between",
    paddingBottom: 70,
    paddingHorizontal: 15,
    paddingTop: 10,
    backgroundColor: "#22252d"
  },
  column: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    gap: 10
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    flexGrow: 1,
    width: "100%",
    gap: 30
  }

});
