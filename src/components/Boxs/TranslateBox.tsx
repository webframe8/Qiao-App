import Icon from "../Icons/Icon";
import MediumText from "../Texts/MediumText";
import SmallText from "../Texts/SmallText";
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import { Colors } from "@/src/constants/theme";

type Props = {
  text: string;
  translatedText: string;
  spokenText: string;
  onSpeak?: () => void;
  onCopy?: () => void;
  style?: StyleProp<ViewStyle>;
};

export default function TranslationBox(props: Props) {


  return (
    <View style={[styles.boxContainer, props.style]}>
      <View
        style={{
          paddingBottom: 10,
          borderBottomWidth: 0.5,
          borderBottomColor: Colors.textMuted,
        }}
      >
        <SmallText
          text={props.text}
          style={{ fontSize: 18, color: Colors.background, fontWeight: 200 }}
        />
      </View>
      <View
        style={{
          paddingVertical: 10,
        }}
      >
        <SmallText
          text={props.translatedText ?? "error"}
          style={{ fontSize: 18, color: Colors.background, fontWeight: 200 }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 10,
          }}
        >
          <TouchableOpacity onPress={() => props.onSpeak?.()} >
            <Icon name="volume-up" color={Colors.background} size={22} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.onCopy?.()}>
            <Icon name="copy" color={Colors.background} size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boxContainer: {
    width: "100%",
    backgroundColor: Colors.dark,
    alignSelf: "center",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
});
