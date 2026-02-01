import Icon from "../Icons/Icon";
import {
  View,
  StyleSheet,
  StyleProp,
  Pressable,
  ViewStyle,
} from "react-native";
import { Colors } from "@/src/constants/theme";
import SmallText from "../Texts/SmallText";

type Props = {
  IconName: string;
  IconSize?: number;
  IconColor?: string;
  title: string;
  onpress: () => void;
  style?: StyleProp<ViewStyle>;
};

export default function TransalationCropCard(props: Props) {
  return (
    <>
      <Pressable onPress={props.onpress} style={[{}, props.style]}>
        <View style={styles.iconHolder}>
          <Icon
            name={props.IconName}
            color={props.IconColor ?? Colors.background}
            size={props.IconSize}
          />
        </View>
        <SmallText
          text={props.title}
          style={{
            color: Colors.background,
            fontWeight: 100,
            textAlign: "center",
            fontSize: 13,
          }}
        />
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  iconHolder: {
    padding: 10,
    backgroundColor: Colors.dark,
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 70,
  },
});
