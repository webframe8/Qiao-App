import React, {useEffect, useRef} from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import HeaderText from "@/src/components/Texts/HeaderText";
import MediumText from "@/src/components/Texts/MediumText";
import CustomButton from "@/src/components/Buttons/CustomButton";
import SmallText from "@/src/components/Texts/SmallText";
import { Colors } from "@/src/constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "@/src/navigators/types/navigation.types";
import { Animated } from "react-native";

type Props = NativeStackScreenProps<AppStackParamList, "GetStarted">;

export default function GetStartedScreen({ navigation }: Props) {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
            delay: 200,
        }).start();
    },[])

  return (
    <>
      <ImageBackground
        source={require("../../../assets/images/getstartedbg.png")}
        resizeMode="cover"
        style={styles.startcontaneir}
      >
        <LinearGradient
          style={styles.absoluteFill}
          colors={["#0000", Colors.accentBlue]}
          start={{ x: 0, y: 0 }}
          end={{ x: 2, y: 1 }}
        >
          <Animated.View style={[styles.context, {opacity: fadeAnim}]}>
            <SmallText text="Qiao" style={[styles.text, { fontSize: 22 }]} />
            <HeaderText
              text="Translate without boarders"
              style={[styles.text, { marginVertical: 0 }]}
            />
            <MediumText
              text="Understand and be understood — anywhere, anytime."
              style={[styles.text, { marginTop: 0 }]}
            />
            <CustomButton
              label="Get Started"
              backgroundColor={Colors.primary}
              textStyle={{ color: Colors.background }}
              onPress={() => navigation.navigate("Home")}
            />
          </Animated.View>
        </LinearGradient>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  startcontaneir: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },

  absoluteFill: {
    flex: 1,
  },

  context: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 20,
  },

  text: {
    textAlign: "center",
    color: Colors.background,
  },
});
