import React from "react";
import {
  Image,
  StyleSheet,
  View,
  TextInput,
  Text,
  Platform,
  useColorScheme,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { HeaderSuggestPost } from "@/components/HeaderSuggestPost";
import { PreviewCard } from "../../components/PreviewCard";
import { Collapsible } from "../../components/Collapsible";
import { CheckBox } from "rn-inkpad";
import { Colors } from "../../constants/Colors";

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const [text, onChangeText] = React.useState("");

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerContent={<HeaderSuggestPost />}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Filters (tags)</ThemedText>
        <TextInput
          style={{...styles.input, color: Colors[colorScheme ?? "light"].tint, borderColor: Colors[colorScheme ?? "light"].text}}
          onChangeText={onChangeText}
          value={text}
          placeholder="Search"
        />
      </ThemedView>

      <View
        style={{
          flexDirection:
            Platform.OS === "web" || window.innerWidth >= 750
              ? "row"
              : "column",
        }}
      >
        <View style={{ width: 240, marginBottom: 30 }}>
          <ThemedText type="subtitle">Newest posts</ThemedText>
          <Collapsible title="Categories">
            <View style={styles.checkboxContainer}>
              <CheckBox
                // value={isSelected}
                // onValueChange={setSelection}
                iconColor={Colors[colorScheme ?? "light"].orange}
                style={styles.checkbox}
                textStyle={{
                  ...styles.label,
                  color: Colors[colorScheme ?? "light"].text,
                }}
                title="Compute"
              />
              <CheckBox
                // value={isSelected}
                // onValueChange={setSelection}
                iconColor={Colors[colorScheme ?? "light"].orange}
                style={styles.checkbox}
                textStyle={{
                  ...styles.label,
                  color: Colors[colorScheme ?? "light"].text,
                }}
                title="Developer Tools"
              />
              <CheckBox
                // value={isSelected}
                // onValueChange={setSelection}
                iconColor={Colors[colorScheme ?? "light"].orange}
                style={styles.checkbox}
                textStyle={{
                  ...styles.label,
                  color: Colors[colorScheme ?? "light"].text,
                }}
                title="Generative AI"
              />
            </View>
          </Collapsible>
        </View>

        <ThemedView style={styles.wrapperPreviewList}>
          <PreviewCard />
          <PreviewCard />
          <PreviewCard />
          <PreviewCard />
        </ThemedView>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    fontFamily: "AmazonEmber,Helvetica Neue,Helvetica,Arial,sans-serif",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    fontFamily: "AmazonEmber,Helvetica Neue,Helvetica,Arial,sans-serif",
    gap: 8,
    marginBottom: 8,
  },
  wrapperPreviewList: {
    flex: 1,
    flexDirection: "column",
    fontFamily: "AmazonEmber,Helvetica Neue,Helvetica,Arial,sans-serif",
    rowGap: 15,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
    zIndex: -1,
  },
  input: {
    fontFamily: "AmazonEmber,Helvetica Neue,Helvetica,Arial,sans-serif",
    height: 40,
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
  },
  checkboxContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    rowGap: 5,
    marginBottom: 20,
  },
  checkbox: {},
  label: {
    fontFamily: "AmazonEmber,Helvetica Neue,Helvetica,Arial,sans-serif",
  },
});
