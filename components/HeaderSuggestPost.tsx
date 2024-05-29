import { Button, StyleSheet, Text, View, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedButton } from "./ThemedButton";
import { APP_FONTS } from "../constants/Fonts";

const CONTENT : {title: string, description: string} = {
  title: 'The standard Lorem Ipsum passage, used since the 1500s',
  description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
}

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function HeaderSuggestPost({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return (
    <View style={[{ backgroundColor }, style]} {...otherProps}>
      <View style={styles.contentView}>
        <Text style={APP_FONTS.title}>{CONTENT.title}</Text>
        <Text style={APP_FONTS.textMedium}>{CONTENT.description}</Text>
      </View>
      <View style={styles.buttonView}>
        <ThemedButton title="Read More" type="rounded" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonView: {
    flexDirection: "row",
    position: "absolute",
    top: 24,
    right: 24
  },
  contentView: {
    flexDirection: 'column',
    rowGap: 15,
    position: 'absolute',
    top: 24,
    left: 24,
    width: '75%'
  }
});
