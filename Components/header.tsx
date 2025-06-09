import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Header</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#faf0e6",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
})

export default Header