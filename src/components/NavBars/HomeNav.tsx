import { Colors, Fonts } from "@/src/constants/theme";
import { GlobalStyles } from "@/src/constants/styles/globalstyles";
import { View, StyleSheet, Pressable } from "react-native";
import SmallText from "../Texts/SmallText";
import MediumText from "../Texts/MediumText";
import Icon from "../Icons/Icon";
import React from "react";

type Props = {
  title?: string;
  children?: React.ReactNode;
  nonav?: boolean;
  navigation?: () => void;
};

export default function HomeNavBar(props: Props) {
  return (
    <>
      <View style={styles.Homenav}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 10,
          }}
        >
            { !props.nonav && <Pressable style={styles.menu} onPress={props.navigation} >
                <Icon name="arrow-left" color={Colors.background} size={20} />
            </Pressable>}
            <SmallText
              text={props.title ?? "Home"}
              style={{
                color: Colors.background,
                fontSize: 25,
                fontWeight: 300,
                margin: 0,
                lineHeight: 25,
              }}
            />
        </View>
        <Pressable style={styles.icons}>
          <Icon name="setting" color={Colors.background} size={23} />
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  Homenav: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  menu: {
    width: 50,
    height: 50,
    backgroundColor: Colors.dark,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    borderWidth: 0.5,
    borderColor: Colors.textMuted,
    borderStyle: "dashed",
  },

  icons: {
    flexDirection: "row",
    backgroundColor: Colors.dark,
    alignItems: "center",
    padding: 12,
    borderRadius: "50%",
    borderWidth: 0.5,
    borderColor: Colors.textMuted,
    borderStyle: "dashed",
    maxHeight: 50,
    minHeight: 50,
  },
});
