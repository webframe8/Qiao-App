import { BaseUrl } from "@/env.config";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type payload = {
  text: string;
  targetLanguage: string;
  token?: string;
};

export const useData = () => {
  const translate = async (input: Omit<payload, "token">) => {
    const { text, targetLanguage } = input;

    if (!text.trim()) return null;

    const token = await AsyncStorage.getItem("deviceToken");
    if (!token) throw new Error("Missing token");

    const response = await fetch(`${BaseUrl}/translate/`, {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({
        ...input,
        token,
      }),
    });

    if (!response.ok) {
      throw new Error("translation failed");
    }

    return await response.json();
  };

  return {
    translate,
  };
};
