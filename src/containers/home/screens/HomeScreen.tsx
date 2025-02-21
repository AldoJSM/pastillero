import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, button, primaryButton } from '@core'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native';

const dummy_users = [
    { id: 1, medicamento: 'Paracetamol', cada: '12hrs' },
    { id: 2, medicamento: 'Ibuprofeno', cada: '8hrs' },
    { id: 3, medicamento: 'Amoxicilina', cada: '24hrs' },
    { id: 4, medicamento: 'Omeprazol', cada: '12hrs' },
    { id: 5, medicamento: 'Dexametasona', cada: '24hrs' },
    { id: 6, medicamento: 'Clonazepam', cada: '12hrs' },
    { id: 7, medicamento: 'Lorazepam', cada: '12hrs' },
]

export const HomeScreen = () => {
    const { top, bottom } = useSafeAreaInsets()
    const route = useRoute();
    const { userId } = route.params || {};

    console.log("User ID home:", userId);
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
                data={dummy_users}
                renderItem={({ item }) => (
                    <View style={styles.infoContainer}>
                        <Text style={styles.texts}>Medicamento: {item.medicamento}</Text>
                        <Text style={styles.texts}>Cada: {item.cada}</Text>
                        {primaryButton({ text: 'Editar', oneTouch: () => { alert('Tomaste el medicamento') } })}
                        {button({ text: 'Eliminar', oneTouch: () => { alert('No tomaste el medicamento') } })}
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