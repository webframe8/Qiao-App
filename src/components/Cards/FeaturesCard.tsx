import { LinearGradient } from "expo-linear-gradient";
import Icon from "../Icons/Icon";
import { Colors } from "@/src/constants/theme";
import SmallText from "../Texts/SmallText";
import {
  View,
  Pressable,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";

type Props = {
  IconName: string;
  IconColor?: string;
  IconSize?: number;
  title: string;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
  disabled?: boolean;
  colors?: any;
  TextStyle?: StyleProp<TextStyle>;
};

export default function TranslateFeaturesCard(props: Props) {
  return (
    <Pressable
      style={[{ width: "46%" }, { ...(props.disabled && styles.disabled) }]}
      onPress={props.disabled ? () => {console.log("disabled")} : props.onPress}
    >
      <LinearGradient
        colors={props.colors ?? [Colors.dark, Colors.accentBlue]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{ borderRadius: 20 }}
      >
        <View style={[{}, props.style, styles.cardcontaineir]}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Icon
              name={props.IconName}
              color={props.IconColor ?? Colors.background}
              size={props.IconSize ?? 50}
            />
          </View>
          <SmallText
            text={props.title}
            style={[
              props.TextStyle,
              {
                textAlign: "center",
                color: Colors.background,
                marginTop: 20,
                lineHeight: 25,
              },
            ]}
          />
        </View>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  disabled: {
    opacity: 0.2,
  },
  cardcontaineir: {
    padding: 20,
    paddingTop: 30,
    boxSizing: "border-box",
    height: 200,
    justifyContent: "center",
  },
});
