import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { button, COLORS, inputText, loguearse, primaryButton } from '@core'

export const LoginScreen = ({navigation}:any) => {
  const { top } = useSafeAreaInsets()
  const [correo, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (correo == "" || password == "") {
      Alert.alert("Falta llenar algun campo");
      return;
    }
    const user = await loguearse({ correo, password });
    if (user.success) {
      await Alert.alert("Exito.", "Éxito al loguearse");
      navigation.navigate('MainApp')
    } else {
      Alert.alert("Error", " " + user.error);
    }
  };


  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <Text style={styles.title}>Iniciar sesión</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.texts}>Correo</Text>
        {inputText({ value: correo, onChangeText: setEmail })}
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.texts}>Contraseña</Text>
        {inputText({ value: password, onChangeText: setPassword })}
      </View>

      {primaryButton({ text: 'Iniciar sesión', oneTouch: handleLogin })}
      {button({ text: 'Crear cuenta', oneTouch: () => navigation.navigate('register') })}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: COLORS.purple,
    justifyContent: 'center',
  },
  inputContainer: {
    backgroundColor: COLORS.tertiary,
    padding: 10,
    marginVertical: 15,
    borderRadius: 10,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    paddingBottom: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.white,
  },
  texts: {
    fontSize: 20,
    color: COLORS.white,
    fontWeight: 'bold',

  }
})