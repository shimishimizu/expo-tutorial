import React from "react";
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const PlatinumSchoolScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Platinum School</Text>
      <TouchableOpacity
        // onPress={() => navigation.navigate("https://englishcompany.jp")}
        onPress={() =>
          Linking.openURL("#").catch((err) =>
            console.error("URLを開けませんでした。", err)
          )
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

export default PlatinumSchoolScreen;
