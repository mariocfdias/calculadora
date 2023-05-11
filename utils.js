
import { Feather } from '@expo/vector-icons';

export const getOperator = (operator) => {
  switch (operator) {
    case '÷':
      return '/'
      break;
    case 'X':
      return '*'
      break;
    default:
      return operator
      break
  }

}

export const buttons = [
  {
    text: "AC",
    color: "#27f5ce",
    type: "CLEAR"
  }
  , {
    text: "+/-",
    color: "#27f5ce",
    type: "UNITOPERATION"

  }, {
    text: "%",
    color: "#27f5ce",
    type: "UNITOPERATION"
  }, {
    text: "÷",
    color: "#e26262",
    type: "OPERATION"
  },
  {
    text: "7",
    color: "#e2e3e4",
    type: "NUMBER"
  },
  {
    text: "8",
    color: "#e2e3e4",
    type: "NUMBER"

  },
  {
    text: "9",
    color: "#e2e3e4",
    type: "NUMBER"

  },
  {
    text: "X",
    color: "#e26262",
    type: "OPERATION"

  },
  {
    text: "4",
    color: "#e2e3e4",
    type: "NUMBER"

  },
  {
    text: "5",
    color: "#e2e3e4",
    type: "NUMBER"

  },
  {
    text: "6",
    color: "#e2e3e4",
    type: "NUMBER"

  },
  {
    text: "-",
    color: "#e26262",
    type: "OPERATION"

  },
  {
    text: "1",
    color: "#e2e3e4",
    type: "NUMBER"

  },
  {
    text: "2",
    color: "#e2e3e4",
    type: "NUMBER"

  },
  {
    text: "3",
    color: "#e2e3e4",
    type: "NUMBER"

  },
  {
    text: "+",
    color: "#e26262",
    type: "OPERATION"

  },
  {
    text: <Feather name="rotate-ccw" size={24} />,
    color: "#e2e3e4",
    type: "DELETE"


  },
  {
    text: "0",
    color: "#e2e3e4",
    type: "NUMBER"

  },
  {
    text: ".",
    color: "#e2e3e4",
    type: "DOT"

  },
  {
    text: "=",
    color: "#e26262",
    type: "EQUALS"

  }]