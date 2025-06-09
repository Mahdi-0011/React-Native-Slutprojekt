import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';

function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.title}>footer</Text>
      <View style={styles.Button}>
      <Button title="Home" onPress={() => alert('Button Pressed!')} />
      </View>
    </View>
  )
}

export default Footer;

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'plum',
    height: 100,
    alignItems: 'center',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    bottom: 0,
    left: 0,
    right: 0,
  },
    title: {
    fontSize: 20,
    fontWeight: "bold",
  },
    Button: {
    backgroundColor: 'skyblue', 
    borderBlockColor: 'white',
    borderRadius: 5,
    height: 40,
    },

});