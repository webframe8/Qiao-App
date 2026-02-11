import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppContext } from "../context/AppContext";

import { AppStackParamList } from "./types/navigation.types";

import HomeScreen from "../screens/Home/Home";
import GetStartedScreen from "../screens/GetStarted/GetStarted";
import TextTranslationScreen from "../screens/TranslationFeatures/TextTranslation";

const Stack = createNativeStackNavigator<AppStackParamList>();

export default function StackNavigator() {
    const context = useContext(AppContext)
    if (!context) {
        return null;
    }

    const { isFirstLaunch } = context

  return (
    <Stack.Navigator
      //initialRouteName={isFirstLaunch ? "GetStarted" : "Home"}
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      {isFirstLaunch ? (
        <Stack.Screen
          name="GetStarted"
          component={GetStartedScreen}
        />
      ) : (
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
      )}
      <Stack.Screen name="TextTranslate" component={TextTranslationScreen} />
    </Stack.Navigator>
  );
}
