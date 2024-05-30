import {
  Button,
  StyleSheet,
  Text,
  View,
  useColorScheme,
  type ViewProps,
} from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedButton } from "./ThemedButton";
import { APP_FONTS } from "../constants/Fonts";
import { Colors } from "../constants/Colors";

const CONTENT: { title: string; description: string } = {
  title: "Building your machine learning skills from zero",
  description:
    "Navigating the tech landscape without a traditional computer science background has been a challenging, yet rewarding, journey. Approximately two years ago, I was preparing to take the AWS Certified Cloud Practitioner exam. In this blog, I’ll share my non-traditional journey into a career in tech and how this path led me to explore the world of machine learning (ML), including advice and resources for those wanting to make the leap.",
};

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
  const colorScheme = useColorScheme();
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return (
    <View style={[{ backgroundColor }, style]} {...otherProps}>
      <View style={styles.contentView}>
        <Text
          style={{
            ...APP_FONTS.title,
            color: Colors[colorScheme ?? "light"].tint,
          }}
        >
          {CONTENT.title}
        </Text>
        {/* <Text style={{...APP_FONTS.textMedium, color: Colors[colorScheme ?? "light"].text }}>{CONTENT.description}</Text> */}

        <View style={styles.buttonView}>
          <ThemedButton title="Read More" type="rounded" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonView: {
    flexDirection: "row"
  },
  contentView: {
    flexDirection: "column",
    rowGap: 15,
    position: "absolute",
    top: 24,
    left: 24,
    width: "75%",
  },
});
