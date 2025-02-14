import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { button, COLORS, inputText, primaryButton, registrarUsuario, registrarPaciente } from '@core'

export const RegisterScreen = () => {
  const {top, bottom}=useSafeAreaInsets()
  // Estado para los campos del paciente
const [paciente, setPaciente] = useState({
  nombreDelPaciente: '',
  edadDelPaciente: '',
  generoDelPaciente: '',
  NumeroTelPaciente: '',
  lugarDeResidenciaDelPaciente: '',
});

// Estado para los campos del cuidador
const [cuidador, setCuidador] = useState({
  nombreDelCuidador: '',
  edadDelCuidador: '',
  relacionConElPaciente: '',
  NumeroTelCuidador: '',
  lugarDeResidenciaDelCuidador: '',
  correoElectronico: '',
  password: '',
});

const handleChangePaciente = (key: keyof typeof paciente, value: string) => {
  setPaciente({ ...paciente, [key]: value });
};

const handleChangeCuidador = (key: keyof typeof cuidador, value: string) => {
  setCuidador({ ...cuidador, [key]: value });
};

const handleRegister = async () => {
  try {
    await registrarPaciente(paciente);
    await registrarUsuario(cuidador);
    Alert.alert("Registro exitoso", "Los datos se han guardado correctamente.");
  } catch (error) {
    Alert.alert("Error");
  }
};
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
        {inputText({value:paciente.nombreDelPaciente, onChangeText:(text)=>handleChangePaciente('nombreDelPaciente', text)})}
        <Text style={styles.texts}>Edad</Text>
        {inputText({value:paciente.edadDelPaciente, onChangeText:(text)=>handleChangePaciente('edadDelPaciente', text)})}
        <Text style={styles.texts}>Genero</Text>
        {inputText({value:paciente.generoDelPaciente, onChangeText:(text)=>handleChangePaciente('generoDelPaciente', text)})}
        <Text style={styles.texts}>Número de telefono</Text>
        {inputText({value:paciente.NumeroTelPaciente, onChangeText:(text)=>handleChangePaciente('NumeroTelPaciente', text)})}
        <Text style={styles.texts}>Lugar de residencia</Text>
        {inputText({value:paciente.lugarDeResidenciaDelPaciente, onChangeText:(text)=>handleChangePaciente('lugarDeResidenciaDelPaciente', text)})}

      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.texts}>Nombre del cuidador</Text>
        {inputText({value:cuidador.nombreDelCuidador, onChangeText:(text)=>handleChangeCuidador('nombreDelCuidador', text)})}
        <Text style={styles.texts}>Edad</Text>
        {inputText({value:cuidador.edadDelCuidador, onChangeText:(text)=>handleChangeCuidador('edadDelCuidador', text)})}
        <Text style={styles.texts}>Relación con el paciente</Text>
        {inputText({value:cuidador.relacionConElPaciente, onChangeText:(text)=>handleChangeCuidador('relacionConElPaciente', text)})}
        <Text style={styles.texts}>Numero de contacto</Text>
        {inputText({value:cuidador.NumeroTelCuidador, onChangeText:(text)=>handleChangeCuidador('NumeroTelCuidador', text)})}
        <Text style={styles.texts}>Correo electronico</Text>
        {inputText({value:cuidador.correoElectronico, onChangeText:(text)=>handleChangeCuidador('correoElectronico', text)})}
        <Text style={styles.texts}>Lugar de recidencia</Text>
        {inputText({value:cuidador.lugarDeResidenciaDelCuidador, onChangeText:(text)=>handleChangeCuidador('lugarDeResidenciaDelCuidador', text)})}
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.texts}>Contraseña</Text>
        {inputText({value:cuidador.password, onChangeText:(text)=>handleChangeCuidador('password', text)})}
      </View>

      {primaryButton({text:'Registar datos', oneTouch:handleRegister})}
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