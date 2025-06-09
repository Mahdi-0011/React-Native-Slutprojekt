import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Layout from './Layout/Layout';

export default function App() {
  return (
    <View style={styles.container}> 
      {/* <Text>Hello Mahdi!
        Slutprjekt react native! hello!
      </Text>
      <StatusBar style="auto" /> */}
      <Layout children={undefined}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
