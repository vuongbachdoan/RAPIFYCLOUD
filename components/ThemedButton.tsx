import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, ButtonProps, TouchableOpacity, Text } from "react-native";

export type ThemedButtonProps = ButtonProps & {
  type?: "default" | "rounded";
};

export function ThemedButton({
  type = "default",
  title,
  onPress,
  ...rest
}: ThemedButtonProps) {
  const buttonStyle = type === "rounded" ? styles.rounded : styles.default;

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  default: {
    padding: 10,
    backgroundColor: '#1B1B1B',
  },
  rounded: {
    padding: 10,
    borderRadius: 12,
    backgroundColor: '#1B1B1B'
  },
  textStyle: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '500',
  }
});
