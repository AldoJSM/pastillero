import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';
import { COLORS, getDatosUsuario } from '@core';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export const ProfileScreen = () => {
  const { top, bottom } = useSafeAreaInsets();

  const route = useRoute();
  const { userId } = route.params || {};
  const [datos, setDatos] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const userData = await getDatosUsuario({ userId });
        setDatos(userData);
      } catch (error) {
        console.error("Error obteniendo datos del usuario:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      cargarDatos();
    }
  }, [userId]);

  if (loading) {
    return <Text>Cargando datos...</Text>;
  }

  if (!datos) {
    return <Text>No se encontraron datos.</Text>;
  }

  return (

    <ScrollView
      style={styles.container}

      contentContainerStyle={{
        paddingTop: top,
        paddingBottom: bottom,
        flexGrow: 1
      }}
    >
      <Text style={styles.title}>Datos de paciente</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.texts}>Nombre del paciente:</Text>
        <Text style={styles.textsData}>{datos.paciente.nombreDelPaciente}</Text>
        <Text style={styles.texts}>Edad</Text>
        <Text style={styles.textsData}>{datos.paciente.edadDelPaciente}</Text>
        <Text style={styles.texts}>Genero</Text>
        <Text style={styles.textsData}>{datos.paciente.generoDelPaciente}</Text>
        <Text style={styles.texts}>Número de telefono</Text>
        <Text style={styles.textsData}>{datos.paciente.numeroTelPaciente}</Text>
        <Text style={styles.texts}>Lugar de residencia</Text>
        <Text style={styles.textsData}>{datos.paciente.lugarDeResidenciaDelPaciente}</Text>
      </View>

      <Text style={styles.title}>Datos de cuidador</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.texts}>Nombre del cuidador:</Text>
        <Text style={styles.textsData}>{datos.nombreDelCuidador}</Text>
        <Text style={styles.texts}>Edad:</Text>
        <Text style={styles.textsData}>{datos.edadDelCuidador}</Text>
        <Text style={styles.texts}>Relación con el paciente:</Text>
        <Text style={styles.textsData}>{datos.relacionConElPaciente}</Text>
        <Text style={styles.texts}>Numero de contacto:</Text>
        <Text style={styles.textsData}>{datos.numeroTelCuidador}</Text>
        <Text style={styles.texts}>Lugar de residencia:</Text>
        <Text style={styles.textsData}>{datos.lugarDeResidenciaDelCuidador}</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: COLORS.purple,
    /// justifyContent: 'center',
  },
  inputContainer: {
    backgroundColor: COLORS.tertiary,
    padding: 10,
    marginBottom:50,
    marginVertical: 15,
    borderRadius: 10,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.white,
  },
  texts: {
    fontSize: 20,
    color: COLORS.white,
    fontWeight: 'bold',
  },
  textsData: {
    fontSize: 16,
    color: COLORS.white,
  }
})