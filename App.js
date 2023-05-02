import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
const range = (start, end, length = end - start + 1) => Array.from({ length }, (_, i) => start + i)

const buttons = [
  {
    text: "AC",
    color: "#27f5ce"
  }
  , {
    text: "+/-",
    color: "#27f5ce"

  }, {
    text: "%",
    color: "#27f5ce"

  }, {
    text: "÷",
    color: "#e26262"
  },
  { text: "7" },
  { text: "8" },
  { text: "9" }, {
    text: "X",
    color: "#e26262"
  },
  { text: "4" },
  { text: "5" },
  { text: "6" }, {
    text: "-",
    color: "#e26262"
  },
  { text: "1" },
  { text: "2" },
  { text: "3" }, { text: "+", color: "#e26262" },
  { text: <Feather name="rotate-ccw" size={24} /> },
  { text: "0" },
  { text: "." }, { text: "=", color: "#e26262" }]
const history = ["9*8", "6+4", "5/3", "1+1"]

const actualValue = 1238
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.visorContainer}>
        <View style={styles.historyContainer}>

          {history.map(value => {
            return <Text style={styles.historyText}>
              {value}
            </Text>

          })}

        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>

            {actualValue}
          </Text>

        </View>

      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.column}>

          {range(0, 4).map((row) => {
            return <View style={styles.row}>
              {range(0, 3).map((column) => {
                return <View
                  style={{
                    flex: 1,
                    width: 40,
                    height: 40,
                    justifyContent: "center",
                    alignItems: "center"
                  }}>
                  <Text style={{
                    fontSize: 36,
                    color: buttons[row * 4 + column].color ? buttons[row * 4 + column].color : "#f4f4f5"
                  }}>
                    {buttons[row * 4 + column].text}
                  </Text>
                </View>
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
    fontSize: 30,
    color: "white"
  },
  resultText: {
    fontSize: 54,
    fontWeight: 800,
    color: "white"
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
