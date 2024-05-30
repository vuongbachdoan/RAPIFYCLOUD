import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, ButtonProps, TouchableOpacity, Text, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

export type ThemedButtonProps = ButtonProps & {
  type?: "default" | "rounded";
};

export function ThemedButton({
  type = "default",
  title,
  onPress,
  ...rest
}: ThemedButtonProps) {
  const colorScheme = useColorScheme();
  const buttonStyle = type === "rounded" ? styles.rounded : styles.default;

  return (
    <TouchableOpacity style={{...buttonStyle, backgroundColor: Colors[colorScheme ?? "light"].orange}} onPress={onPress}>
      <Text style={{...styles.textStyle, color: Colors["light"].dark}}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  default: {
    padding: 10,
  },
  rounded: {
    padding: 10,
    borderRadius: 12,
  },
  textStyle: {
    fontSize: 14,
    fontWeight: '500',
  }
});
