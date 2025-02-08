import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { button, COLORS, inputText, primaryButton } from '@core'

export const RegisterScreen = () => {
  const {top}=useSafeAreaInsets()
  return (
    <View style={[styles.container, {paddingTop: top}]}>
      <Text style={styles.title}>Registrarse</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.texts}>Nombre de usuario</Text>
        {inputText()}
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.texts}>Correo electronico</Text>
        {inputText()}
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.texts}>Contraseña</Text>
        {inputText()}
      </View>

      {primaryButton({text:'Registar datos', oneTouch:()=>{alert('Te registraste correctamente')}})}
      {button({text:'<-Volver', oneTouch:()=>{alert('Te devuelve al login')}})}

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      padding: 10,
      backgroundColor: COLORS.purple,
      justifyContent: 'center',
  },
  inputContainer:{
      backgroundColor: COLORS.tertiary,
      padding: 10,
      marginVertical: 15,
      borderRadius: 10,
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
  },
  title:{
      fontSize: 30,
      paddingBottom: 50,
      fontWeight: 'bold',
      textAlign: 'center',
      color: COLORS.white,
  },
  texts:{
    fontSize: 20,
    color: COLORS.white,
    fontWeight: 'bold',

  }
})