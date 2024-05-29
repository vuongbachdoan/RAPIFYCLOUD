import { StyleSheet, Text, View } from "react-native";
import { APP_COLORS } from "../constants/Colors";

export function PreviewCard() {
  return (
    <>
      <View style={styles.cardWrapper}>
        <Text style={styles.titleLink}>Building your machine learning skills from zero</Text>
        <Text style={styles.location}>Jenny Dassas, 02/01/2024</Text>
        <Text style={styles.description}>Navigating the tech landscape without a traditional computer science background has been a challenging, yet rewarding, journey. Approximately two years ago, I was preparing to take the AWS Certified Cloud Practitioner exam. In this blog, I’ll share my non-traditional journey into a career in tech and how this path led me to explore the world of machine learning (ML), including advice and resources for those wanting to make the leap.</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    flexDirection: 'column',
    rowGap: 5
  },
  titleLink: {
    fontFamily: 'AmazonEmber,Helvetica Neue,Helvetica,Arial,sans-serif',
    fontSize: 14,
    fontWeight: 500,
    color: '#0A7EA4',
  },
  location: {
    fontFamily: 'AmazonEmber,Helvetica Neue,Helvetica,Arial,sans-serif',
    fontSize: 14,
    color: APP_COLORS.gray,
    fontWeight: 400,
  },
  description: {
    fontFamily: 'AmazonEmber,Helvetica Neue,Helvetica,Arial,sans-serif',
    fontSize: 14,
    fontWeight: 200,
    color: '#232F3E'
  }
})
