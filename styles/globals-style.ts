import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const GlobalsStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    // alignItems: 'flex-end',
    paddingBottom: 20,
    paddingHorizontal: 20,
  },

  mainResult: {
    color: Colors.textPrimary,
    fontSize: 50,
    textAlign: 'right',
    fontWeight: '400',
    // fontFamily: 'SpaceMono',
  },

  secondaryResult: {
    color: Colors.textSecondary,
    fontSize: 30,
    textAlign: 'right',
    fontWeight: '200',
    // fontFamily: 'SpaceMono',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  button: {
    height: 80,
    width: 80,
    backgroundColor: Colors.darkGray,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    color: Colors.textPrimary,
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    fontWeight: '300',
  },


});