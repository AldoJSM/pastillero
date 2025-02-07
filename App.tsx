import { button } from '@core';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {button ({text: 'Hello world desde react native', oneTouch: () => alert('Hello')})}
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});