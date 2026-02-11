import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Colors, Fonts } from "@/src/constants/theme";
import HomeNavBar from "@/src/components/NavBars/HomeNav";
import TranslateFeaturesCard from "@/src/components/Cards/FeaturesCard";
import TransalationCropCard from "@/src/components/Cards/CropCard";
import CustomButton from "@/src/components/Buttons/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "@/src/navigators/types/navigation.types";

type Props = NativeStackScreenProps<AppStackParamList, "Home">;


export default function HomeScreen({ navigation }: Props) {
  const cropdata = [
    { id: 1, title: "Nerby", Icon: "restaurant", onpress: () => {} },
    { id: 2, title: "Camera", Icon: "camera", onpress: () => {} },
    { id: 3, title: "Job", Icon: "work", onpress: () => {} },
    { id: 4, title: "Study", Icon: "school", onpress: () => {} },
    { id: 5, title: "Support", Icon: "message", onpress: () => {} },
    { id: 6, title: "Blog", Icon: "insights", onpress: () => {} },
  ];
  return (
    <>
      <SafeAreaView style={styles.conatneir}>
        <HomeNavBar title="Home" nonav />
        <ScrollView style={styles.scrollcontainer}>
          <View style={styles.featureHolder}>
            <TranslateFeaturesCard
              IconName="translation"
              title="Text Translation"
              onPress={() => {navigation.navigate("TextTranslate")}}
              colors={["#daf2fb", "#6c24b4"]}
            />
            <TranslateFeaturesCard
              IconName="mic"
              title="Voice Transalation"
              onPress={() => {}}
              colors={["#5ef899", "#0d7a21"]}
            />
            <TranslateFeaturesCard
              IconName="users"
              title="Conversations Translate"
              onPress={() => {}}
              colors={["#92f5a6", "#417dd2"]}
            />
            <TranslateFeaturesCard
              IconName="history"
              title="Saved Histories"
              onPress={() => {}}
              colors={["#4facd0", "#053548"]}
            />
          </View>
          <View style={styles.cropHolder}>
            {cropdata.map((item) => (
              <TransalationCropCard
                title={item.title}
                IconName={item.Icon}
                onpress={item.onpress}
                key={item.id}
                IconSize={27}
                style={{
                  width: "19.95%",
                  alignSelf: "center",
                  justifyContent: "center",
                }}
              />
            ))}
          </View>
          <View style={styles.buttonHolder}>
            <CustomButton
              label="Purchase This App"
              onPress={() => {}}
              backgroundColor={Colors.accentBlue}
              labelColor={Colors.background}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  conatneir: {
    flex: 1,
    backgroundColor: Colors.textPrimary,
    paddingHorizontal: 10,
  },
  scrollcontainer: {
    flex: 1,

  },
  featureHolder: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginTop: 10,
  },
  cropHolder: {
    marginTop: 20,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 25,
    flexWrap: "wrap",
    alignSelf: "center",
  },
  buttonHolder: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    marginTop: 30,
  },
});
