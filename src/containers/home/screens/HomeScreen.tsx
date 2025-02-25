import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, button, eliminarMedicamento, getMedicamentos, primaryButton } from '@core'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native';

export const HomeScreen = () => {
    const { top, bottom } = useSafeAreaInsets()
    const route = useRoute();
    const { userId } = route.params || {};
    const [datos, setDatos] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const cargarDatos = async () => {
            try {
                const response = await getMedicamentos({ userId });

                if (response) {
                    // Convierte el objeto en un array de objetos
                    const datosArray = Object.entries(response).map(([medicamento, info]) => ({
                        medicamento,
                        ...info
                    }));

                    setDatos(datosArray);
                } else {
                    setDatos([]);
                }
            } catch (error) {
                console.error("Error obteniendo datos:", error);
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
        <View
            style={[
                styles.container,
                {
                    paddingTop: top,
                    paddingBottom: bottom,
                    flexGrow: 1
                }
            ]}
        >
            <FlatList
                data={datos}  // Ahora `datos` es un array
                keyExtractor={(item, index) => index.toString()} // Evita warnings de React
                renderItem={({ item }) => (
                    <View style={styles.infoContainer}>
                        <Text style={styles.texts}>Medicamento: {item.medicamento}</Text>
                        <Text style={styles.texts}>Cada: {item.ciclo} horas</Text>
                        <Text style={styles.texts}>Primera dosis: {item.primera}</Text>

                        {primaryButton({ text: 'Editar', oneTouch: () => alert('Tomaste el medicamento') })}
                        {button({ text: 'Eliminar', oneTouch: async ()=> eliminarMedicamento(userId,item.medicamento) })}
                    </View>
                )} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: COLORS.purple,
    },
    infoContainer: {
        backgroundColor: COLORS.tertiary,
        padding: 10,
        marginVertical: 15,
        borderRadius: 20,
        alignContent: 'center',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column',
    },
    title: {
        fontSize: 30,
        paddingBottom: 15,
        paddingTop: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        color: COLORS.white,
        borderRadius: 20,
        marginHorizontal: 20,
        borderWidth: 1,
        backgroundColor: COLORS.secondary,
        borderColor: COLORS.secondary,

    },
    texts: {
        fontSize: 20,
        color: COLORS.white,
        fontWeight: 'bold',

    }
})