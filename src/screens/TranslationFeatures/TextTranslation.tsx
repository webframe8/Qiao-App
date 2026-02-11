import Icon from "@/src/components/Icons/Icon";
import { View, StyleSheet, ScrollView } from "react-native";
import { Colors, Fonts } from "@/src/constants/theme";
import HomeNavBar from "@/src/components/NavBars/HomeNav";
import { GlobalStyles } from "@/src/constants/styles/globalstyles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "@/src/navigators/types/navigation.types";
import Input from "@/src/components/Inputs/Input";
import CustomButton from "@/src/components/Buttons/CustomButton";
import ScreenLayout from "@/src/components/Layouts/ScreenLayout";
import TranslationBox from "@/src/components/Boxs/TranslateBox";
import { useState } from "react";
import { useData } from "@/src/hooks/useData";
import handleSpeak from "@/src/helpers/speech";
import Copy from "@/src/helpers/copy";

type Props = NativeStackScreenProps<AppStackParamList, "TextTranslate">;

type HistoryType = {
  text?: string;
  translatedText?: string;
  character?: string;
};

export default function TextTranslationScreen({ navigation }: Props) {
  const { translate } = useData();
  const [text, setText] = useState<string>("");
  const [targetLang, setTargetLang] = useState("zh-CN");
  const [History, setHistory] = useState<HistoryType[]>([]);

  const handleTranslate = async () => {
    try {
      const response = await translate({ text, targetLanguage: targetLang });

      if (response) {
        setHistory((prev) => [
          {
            text: response.originalText,
            translatedText: response.translatedText,
            character: response.character,
          },
          ...prev,
        ]);
        setText("");
      }
    } catch (e) {
      console.log("Translation failed");
    }
  };
  return (
    <ScreenLayout style={GlobalStyles.ScreenContaneir}>
      <HomeNavBar
        title="Text Translation"
        navigation={() => navigation.goBack()}
      />
      <ScrollView style={styles.TransalatedText}>
        {Array.isArray(History) &&
          History.length > 0 &&
          History.map((item, index) => (
            <TranslationBox
              text={item?.text || ""}
              translatedText={item?.translatedText || ""}
              spokenText={item?.character || ""}
              onSpeak={() => handleSpeak(item?.character || "")}
              onCopy={() => Copy(item?.translatedText || "")}
              key={index}
            />
          ))}
      </ScrollView>

      <View style={styles.InputLayout}>
        <Input
          multiline
          placeholder="Enter Text"
          inputStyle={styles.input}
          style={{ borderWidth: 0 }}
          autoCapitalize="sentences"
          onChangeText={setText}
          value={text}
        >
          <CustomButton
            onPress={handleTranslate}
            backgroundColor="transparent"
            style={{
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 0,
            }}
            buttonStyle={{ padding: 10 }}
          >
            <Icon name="send" size={15} color={Colors.background} />
          </CustomButton>
        </Input>
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  TransalatedText: {},
  InputLayout: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingVertical: 10,
  },
  input: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: Colors.background,
  },
});
