import { ViewStyle } from "react-native";
import color from "./color"


const mainStyle = {
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontSize: 28,
    textTransform: 'uppercase',
    fontWeight: '500',
    color: color.myblack
  },
  p: {
    color: color.myblack,
    fontSize: 20,
  },
};

export {mainStyle};
