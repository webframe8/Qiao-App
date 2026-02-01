import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Colors, Fonts } from "@/src/constants/theme";
import HomeNavBar from "@/src/components/NavBars/HomeNav";
import TranslateFeaturesCard from "@/src/components/Cards/FeaturesCard";
import TransalationCropCard from "@/src/components/Cards/CropCard";
import CustomButton from "@/src/components/Buttons/CustomButton";
export default function HomeScreen() {
  const cropdata = [
    { id: 1, title: "Hotel", Icon: "house", onpress: () => {} },
    { id: 2, title: "Camera", Icon: "camera", onpress: () => {} },
    { id: 3, title: "Job", Icon: "work", onpress: () => {} },
    { id: 4, title: "Study", Icon: "study", onpress: () => {} },
    { id: 5, title: "Support", Icon: "message", onpress: () => {} },
    { id: 6, title: "Blog", Icon: "file", onpress: () => {} },
  ];
  return (
    <>
      <View style={styles.conatneir}>
        <HomeNavBar title="Home" />
        <ScrollView>
          <View style={styles.featureHolder}>
            <TranslateFeaturesCard
              IconName="translation"
              title="Text Translation"
              onPress={() => {}}
              colors={["#daf2fb", "#6c24b4"]}
            />
            <TranslateFeaturesCard
              IconName=""
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
                style={{ width: "19.95%", alignSelf: "center" }}
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
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  conatneir: {
    paddingTop: 25,
    flex: 1,
    backgroundColor: Colors.textPrimary,
    padding: 10,
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
    justifyContent: "flex-end",
  },
});
