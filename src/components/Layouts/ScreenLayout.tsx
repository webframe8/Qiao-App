import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  StyleProp,
  ViewStyle,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React from "react";
import { GlobalStyles } from "@/src/constants/styles/globalstyles";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  keyboardoffset?: number;
  ViewStyle?: StyleProp<ViewStyle>
};

export default function ScreenLayout(props: Props) {
  return (
    <>
    <SafeAreaView style={GlobalStyles.ScreenContaneir}>
      <KeyboardAvoidingView
        style={[{flex: 1, height: "100%"}, props.style]}
        behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
      >
      {props.children}
</KeyboardAvoidingView>

    </SafeAreaView>
    </>
  );
}
