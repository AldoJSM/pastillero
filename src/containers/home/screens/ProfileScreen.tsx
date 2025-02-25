import { ScrollView, StyleSheet, Text, View, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { button, COLORS, getDatosUsuario,eliminarUsuario,actualizarDatosUsuario } from "@core";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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

  if (loading) return <Text>Cargando datos...</Text>;
  if (!datos) return <Text>No se encontraron datos.</Text>;

  const handleChange = (section, key, value) => {
    setDatos((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value,
      },
    }));
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingTop: top,
        paddingBottom: bottom,
        flexGrow: 1,
      }}
    >
      <Text style={styles.title}>Datos de paciente</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.texts}>Nombre del paciente:</Text>
        <TextInput
          style={styles.input}
          value={datos.paciente?.nombreDelPaciente || ""}
          onChangeText={(text) => handleChange("paciente", "nombreDelPaciente", text)}
        />

        <Text style={styles.texts}>Edad</Text>
        <TextInput
          style={styles.input}
          value={datos.paciente?.edadDelPaciente || ""}
          keyboardType="numeric"
          onChangeText={(text) => handleChange("paciente", "edadDelPaciente", text)}
        />

        <Text style={styles.texts}>Género</Text>
        <TextInput
          style={styles.input}
          value={datos.paciente?.generoDelPaciente || ""}
          onChangeText={(text) => handleChange("paciente", "generoDelPaciente", text)}
        />

        <Text style={styles.texts}>Número de teléfono</Text>
        <TextInput
          style={styles.input}
          value={datos.paciente?.numeroTelPaciente || ""}
          keyboardType="phone-pad"
          onChangeText={(text) => handleChange("paciente", "numeroTelPaciente", text)}
        />

        <Text style={styles.texts}>Lugar de residencia</Text>
        <TextInput
          style={styles.input}
          value={datos.paciente?.lugarDeResidenciaDelPaciente || ""}
          onChangeText={(text) => handleChange("paciente", "lugarDeResidenciaDelPaciente", text)}
        />
      </View>

      <Text style={styles.title}>Datos de cuidador</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.texts}>Nombre del cuidador:</Text>
        <TextInput
          style={styles.input}
          value={datos.nombreDelCuidador || ""}
          onChangeText={(text) => setDatos((prev) => ({ ...prev, nombreDelCuidador: text }))}
        />

        <Text style={styles.texts}>Edad:</Text>
        <TextInput
          style={styles.input}
          value={datos.edadDelCuidador || ""}
          keyboardType="numeric"
          onChangeText={(text) => setDatos((prev) => ({ ...prev, edadDelCuidador: text }))}
        />

        <Text style={styles.texts}>Relación con el paciente:</Text>
        <TextInput
          style={styles.input}
          value={datos.relacionConElPaciente || ""}
          onChangeText={(text) => setDatos((prev) => ({ ...prev, relacionConElPaciente: text }))}
        />

        <Text style={styles.texts}>Número de contacto:</Text>
        <TextInput
          style={styles.input}
          value={datos.numeroTelCuidador || ""}
          keyboardType="phone-pad"
          onChangeText={(text) => setDatos((prev) => ({ ...prev, numeroTelCuidador: text }))}
        />

        <Text style={styles.texts}>Lugar de residencia:</Text>
        <TextInput
          style={styles.input}
          value={datos.lugarDeResidenciaDelCuidador || ""}
          onChangeText={(text) => setDatos((prev) => ({ ...prev, lugarDeResidenciaDelCuidador: text }))}
        />
      </View>

      {button({ text: "Guardar Cambios", oneTouch: () => actualizarDatosUsuario(userId, datos) })}
      {button({ text: "Eliminar Usuario", oneTouch: () => eliminarUsuario(userId) })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: COLORS.purple,
  },
  inputContainer: {
    backgroundColor: COLORS.tertiary,
    padding: 10,
    marginBottom: 50,
    marginVertical: 15,
    borderRadius: 10,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: COLORS.white,
  },
  texts: {
    fontSize: 20,
    color: COLORS.white,
    fontWeight: "bold",
  },
  input: {
    fontSize: 16,
    color: COLORS.black,
    backgroundColor: COLORS.white,
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: "100%",
  },
});
