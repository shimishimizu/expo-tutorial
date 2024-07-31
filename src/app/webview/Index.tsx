import React from "react";
import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WebView from "react-native-webview";

const WebViewScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.root}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.view}>
          <WebView source={{ uri: "https://expo.dev/" }} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  view: {
    flex: 1,
  },
});

export default WebViewScreen;
