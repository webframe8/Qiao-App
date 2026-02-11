import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainApp from "./MainApp"
import { useFonts } from "expo-font";
import { AppProvider } from "./src/context/AppContext";


export default function App() {
    const [fontLoaded, fontError] = useFonts({
        'notosansjp-regular': require('./assets/fonts/NotoSansJP-Regular.ttf'),
        'notosansjp-bold': require('./assets/fonts/NotoSansJP-Bold.ttf'),
        'styled-font': require('./assets/fonts/Archivo_Condensed-Regular.ttf'),
    });

    if (!fontLoaded && !fontError) return null

    return (
        <>
        <NavigationContainer>
            <AppProvider>
                <MainApp />
            </AppProvider>
        </NavigationContainer>
        </>
    )

}