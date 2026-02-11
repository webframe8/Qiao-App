import React, { useEffect, useRef, useContext } from "react";
import { View, StyleSheet, ImageBackground, Image } from "react-native";
import HeaderText from "@/src/components/Texts/HeaderText";
import MediumText from "@/src/components/Texts/MediumText";
import CustomButton from "@/src/components/Buttons/CustomButton";
import SmallText from "@/src/components/Texts/SmallText";
import Icon from "@/src/components/Icons/Icon";
import { Colors, Fonts } from "@/src/constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "@/src/navigators/types/navigation.types";
import { Animated } from "react-native";
import { AppContext } from "@/src/context/AppContext";

type Props = NativeStackScreenProps<AppStackParamList, "GetStarted">;

export default function GetStartedScreen({ navigation }: Props) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const { CompleteOnboarding } = useContext(AppContext)!;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
      delay: 200,
    }).start();
  }, []);

  return (
    <>
      <ImageBackground
        source={require("../../../assets/images/newmage.png")}
        resizeMode="cover"
        style={styles.startcontaneir}
      >
        <LinearGradient
          style={styles.absoluteFill}
          colors={["#0000", Colors.accentBlue]}
          start={{ x: 0, y: 0 }}
          end={{ x: 2, y: 1 }}
        >
          <Animated.View style={[styles.context, { opacity: fadeAnim }]}>
            <SmallText
              text="Qiao"
              style={[
                styles.text,
                {
                  fontSize: 40,
                  marginTop: 30,
                  fontWeight: 700,
                  letterSpacing: 2,
                  color: Colors.accentBlue,
                },
              ]}
            />
            <HeaderText
              text="Translate without boarders"
              numberOfLines={2}
              style={[
                styles.text,
                {
                  marginVertical: 10,
                  fontSize: 50,
                  lineHeight: 60,
                  fontWeight: 500,
                },
              ]}
            />
            {/* <CustomButton
              label="Get Started"
              backgroundColor={Colors.primary}
              textStyle={{ color: Colors.background }}
              onPress={() => navigation.navigate("Home")}
            /> */}

            <View style={styles.ButtonContaneir}>
              <View style={styles.ButtonHolder}>
                <CustomButton
                  onPress={CompleteOnboarding}
                  style={{
                    width: 70,
                    height: 70,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 50,
                    marginBottom: 0,
                  }}
                >
                  <Icon name="play" size={22} />
                </CustomButton>
                <SmallText
                  text="Get Started"
                  style={{
                    color: Colors.background,
                    fontSize: 18,
                    fontWeight: 500,
                    flex: 1,
                    textAlign: "center",
                  }}
                />
                <View style={styles.IconVit}>
                  <Icon
                    name="chevron-right"
                    size={24}
                    color="#ffffff86"
                    style={{ marginRight: -10 }}
                  />
                  <Icon
                    name="chevron-right"
                    size={24}
                    color="#ffffffe4"
                    style={{ marginRight: -10 }}
                  />
                  <Icon
                    name="chevron-right"
                    size={24}
                    color={Colors.background}
                  />
                </View>
              </View>
            </View>
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
    padding: 20,
  },

  text: {
    color: Colors.background,
    fontFamily: Fonts.styled,
    textTransform: "capitalize",
  },

  ButtonContaneir: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 60,
  },
  ButtonHolder: {
    width: "100%",
    backgroundColor: "#00000076",
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    padding: 10,
  },
  IconVit: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: 10,
  },
});
