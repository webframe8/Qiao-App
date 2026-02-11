import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"
import uuid from "react-native-uuid";

type AppContextType = {
    isFirstLaunch: boolean | null,
    CompleteOnboarding: ()=> void
}

export const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

    useEffect(() => {
        const checkLaunch = async () => {
            const value = await AsyncStorage.getItem("hasLaunched");
            const deviceToken = await AsyncStorage.getItem("deviceToken");
            // console.log("Launch value:", value);
            // console.log("Device Token:", deviceToken);
            // get staorage token
            setIsFirstLaunch(value === null);
        };
        checkLaunch();
    }, []);

    const CompleteOnboarding = async () => {
        await AsyncStorage.setItem("hasLaunched", "true");
        await AsyncStorage.setItem("deviceToken", uuid.v4().toString());
        setIsFirstLaunch(false)
    };

    return (
        <AppContext.Provider value={{ isFirstLaunch, CompleteOnboarding }}>
            {children}
        </AppContext.Provider>
    )
}