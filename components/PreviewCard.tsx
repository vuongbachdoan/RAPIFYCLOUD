import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";
import { APP_COLORS, Colors } from "../constants/Colors";

export function PreviewCard({ navigation }: any) {
  const colorScheme = useColorScheme();

  return (
    <>
      <View style={{...styles.cardWrapper, flexDirection: Platform.OS === "web" ? "row" : "column-reverse"}}>
        <View style={{ width: Platform.OS === "web" ? "100%" : "35%", height: "100%" }}>
          <Image
            style={{ height: "100%", width: "100%", borderRadius: 12 }}
            source={{
              uri: "https://d2908q01vomqb2.cloudfront.net/9109c85a45b703f87f1413a405549a2cea9ab556/2024/01/22/building-ML-skills.png",
            }}
          />
        </View>
        
        <View style={styles.contentWrapper}>
          <Text
            onPress={() => {
              navigation.navigate("Details", {
                uuid: 1,
              });
            }}
            style={{
              ...styles.titleLink,
              color: Colors[colorScheme ?? "light"].link,
            }}
          >
            Building your machine learning skills from zero
          </Text>
          <Text
            style={{
              ...styles.location,
              color: Colors[colorScheme ?? "light"].hint,
            }}
          >
            Jenny Dassas, 02/01/2024
          </Text>
          {Platform.OS === "web" && (
            <Text
              style={{
                ...styles.description,
                color: Colors[colorScheme ?? "light"].tint,
              }}
              numberOfLines={5}
            >
              Navigating the tech landscape without a traditional computer
              science background has been a challenging, yet rewarding, journey.
              Approximately two years ago, I was preparing to take the AWS
              Certified Cloud Practitioner exam. In this blog, I’ll share my
              non-traditional journey into a career in tech and how this path
              led me to explore the world of machine learning (ML), including
              advice and resources for those wanting to make the leap.
            </Text>
          )}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    flexDirection: "row",
    columnGap: 15,
  },
  contentWrapper: {
    flexDirection: "column",
    overflow: "hidden",
    rowGap: 5,
    flex: 1,
  },
  titleLink: {
    fontFamily: "AmazonEmber,Helvetica Neue,Helvetica,Arial,sans-serif",
    fontSize: 14,
    fontWeight: 500,
  },
  location: {
    fontFamily: "AmazonEmber,Helvetica Neue,Helvetica,Arial,sans-serif",
    fontSize: 14,
    fontWeight: 400,
  },
  description: {
    fontFamily: "AmazonEmber,Helvetica Neue,Helvetica,Arial,sans-serif",
    fontSize: 14,
    fontWeight: 200,
  },
});
