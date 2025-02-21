import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';


export const ProfileScreen = () => {
  const route = useRoute();
  const { userId } = route.params || {};
  console.log("User ID profile", userId);

  return (
    <View>
      <Text>profileScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})