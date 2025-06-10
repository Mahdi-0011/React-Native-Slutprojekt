/** @format */

import React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView, StatusBar, Platform } from "react-native";
import Footer from "../Components/footer";
import Header from "../Components/header";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <SafeAreaView style={styles.safeView}>
        {/* <Header/> */}
        <ScrollView contentContainerStyle={styles.body}>
          <Text style={styles.title}>body</Text>
          {children}
        </ScrollView>
        {/* <Footer /> */}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeView: {
    backgroundColor: "skyblue",
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "rgb(234, 214, 179)",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 80,
  },
});
