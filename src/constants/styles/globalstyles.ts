import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../theme";

export const GlobalStyles = StyleSheet.create({
  contaneir: {
    width: "100%",
    backgroundColor: Colors.background,
  },
  ScreenContaneir: {
    flex: 1,
    backgroundColor: Colors.textPrimary,
    paddingHorizontal: 10,
  },
});
