import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainApp from "./MainApp"
import { useFonts } from "expo-font";


export default function App() {
    const [fontLoaded, fontError] = useFonts({
        'notosansjp-regular': require('./assets/fonts/NotoSansJP-Regular.ttf'),
        'notosansjp-bold': require('./assets/fonts/NotoSansJP-Bold.ttf')
    });

    if (!fontLoaded && !fontError) return null

    return (
        <>
        <NavigationContainer>
            <MainApp />
        </NavigationContainer>
        </>
    )

}