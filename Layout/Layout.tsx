/** @format */

import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <SafeAreaView style={styles.safeView}>
          {children}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeView: {
    backgroundColor: "rgba(26, 25, 22, 0.831)",
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
