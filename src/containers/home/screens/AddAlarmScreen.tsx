import { Text, View, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { button, COLORS, inputText } from '@core';
import { useRoute } from '@react-navigation/native';
import { registrarMedicamento } from '@core'


export const AddAlarmScreen = () => {
    const { top, bottom } = useSafeAreaInsets();
    const route = useRoute();
    const { userId } = route.params || {};
    if (!userId) {
        console.error("Error: userId no recibido en AddAlarmScreen");
        return;
    } else {
        console.log("User ID add:", userId);
    }
    const [nombre, setNombre] = useState("");
    const [ciclo, setCiclo] = useState("");
    const [primera, setPrimera] = useState("");
    const handleMedicamento = async () => {
        if (nombre == "" || ciclo == "" || primera == "") {
            Alert.alert("Falta llenar algun campo");
            return;
        }
        const medicamento = await registrarMedicamento({ userId, nombre, ciclo, primera });

    };
    return (
        <View style={[styles.container, { paddingTop: top }]}>
            <Text style={styles.title}>Agrega un medicamento</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.texts}>Nombre del medicamento</Text>
                {inputText({ value: nombre, onChangeText: setNombre })}
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.texts}>Cada cuanto tiempo debe tomarse</Text>
                {inputText({ value: ciclo, onChangeText: setCiclo })}
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.texts}>Hora de la primera vez que se toma</Text>
                {inputText({ value: primera, onChangeText: setPrimera })}
                {button({ text: "Registrar medicina", oneTouch: handleMedicamento })}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: COLORS.purple,
        justifyContent: 'flex-start',
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