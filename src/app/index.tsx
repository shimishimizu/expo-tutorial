// import { AppRegistry } from "react-native";
// // import App from './App';
// import { expo } from "../../app.json";
// import Layout from "./_layout";

// AppRegistry.registerComponent(expo.name, () => Layout);

import React from "react";
import { Slot } from "expo-router";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import EcMobileScreen from "./EcMobile";
import MypageScreen from "./Mypage";
import PlatinumSchoolScreen from "./PlatinumSchool";
import HomeScreen from "./Home";
import TrainingScreen from "./Training";
import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      {/* <SafeAreaView style={styles.root}> */}
      <StatusBar barStyle="dark-content" />
      <Text>toppppp</Text>
      <Tab.Navigator>
        <Tab.Screen name="ホーム" component={HomeScreen} />
        <Tab.Screen name="トレーニング" component={TrainingScreen} />
        <Tab.Screen name="教材" component={PlatinumSchoolScreen} />
        <Tab.Screen name="EC MOBILE" component={EcMobileScreen} />
        <Tab.Screen name="マイページ" component={MypageScreen} />
      </Tab.Navigator>
      {/* </SafeAreaView> */}
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

export default App;
