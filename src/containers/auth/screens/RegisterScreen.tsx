import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { button, COLORS, inputText, primaryButton } from '@core'

export const RegisterScreen = () => {
  const {top, bottom}=useSafeAreaInsets()
  return (
    <ScrollView 
    style={styles.container}

    contentContainerStyle={{ 
      paddingTop: top, 
      paddingBottom: bottom+20,
      flexGrow: 1 
    }}
    >
      <Text style={styles.title}>Registro</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.texts}>Nombre del paciente</Text>
        {inputText()}
        <Text style={styles.texts}>Edad</Text>
        {inputText()}
        <Text style={styles.texts}>Genero</Text>
        {inputText()}
        <Text style={styles.texts}>Número de telefono</Text>
        {inputText()}
        <Text style={styles.texts}>Lugar de residencia</Text>
        {inputText()}

      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.texts}>Nombre del cuidador</Text>
        {inputText()}
        <Text style={styles.texts}>Edad</Text>
        {inputText()}
        <Text style={styles.texts}>Relación con el paciente</Text>
        {inputText()}
        <Text style={styles.texts}>Numero de contacto</Text>
        {inputText()}
        <Text style={styles.texts}>Correo electronico</Text>
        {inputText()}
        <Text style={styles.texts}>Lugar de recidencia</Text>
        {inputText()}
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.texts}>Contraseña</Text>
        {inputText()}
      </View>

      {primaryButton({text:'Registar datos', oneTouch:()=>{alert('Te registraste correctamente')}})}
      {button({text:'<-Volver', oneTouch:()=>{alert('Te devuelve al login')}})}

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      padding: 10,
      backgroundColor: COLORS.purple,
     /// justifyContent: 'center',
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