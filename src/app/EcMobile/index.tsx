import React from "react";
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const EcMobileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>EC MOBILE</Text>
      <TouchableOpacity
        // onPress={() => navigation.navigate("https://englishcompany.jp")}
        onPress={() =>
          Linking.openURL(
            "https://ecprime-shadowing.englishcompany.jp/#/"
          ).catch((err) => console.error("URLを開けませんでした。", err))
        }
      >
        <Text style={styles.link}>開く</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default EcMobileScreen;
