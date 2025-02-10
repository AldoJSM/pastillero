import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, button, primaryButton } from '@core'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const dummy_users = [
    {id:1, medicamento:'Paracetamol', cada:'12hrs'},
    {id:2, medicamento:'Ibuprofeno', cada:'8hrs'},
    {id:3, medicamento:'Amoxicilina', cada:'24hrs'},
    {id:4, medicamento:'Omeprazol', cada:'12hrs'},
    {id:5, medicamento:'Dexametasona', cada:'24hrs'},
    {id:6, medicamento:'Clonazepam', cada:'12hrs'},
    {id:7, medicamento:'Lorazepam', cada:'12hrs'},
]

export const HomeScreen = () => {
    const {top, bottom}=useSafeAreaInsets()
  return (
    <ScrollView 
        contentContainerStyle={[
            styles.container, 
            { 
                paddingTop: top, 
                paddingBottom: bottom+20,
                flexGrow: 1
            }
        ]}
    >
        <Text style={styles.title}>Alarmas</Text>
        {primaryButton({text:'Agregar medicamento', oneTouch:()=>{alert('Agregaste un medicamento')}})}
        <FlatList
            data={dummy_users}
            renderItem={({item})=>(
                <View style={styles.infoContainer}>
                    <Text style={styles.texts}>Medicamento: {item.medicamento}</Text>
                    <Text style={styles.texts}>Cada: {item.cada}</Text>
                    {primaryButton({text:'Editar', oneTouch:()=>{alert('Tomaste el medicamento')}})}
                    {button({text:'Eliminar', oneTouch:()=>{alert('No tomaste el medicamento')}})}
                </View>
            )}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        backgroundColor: COLORS.purple,
    },
    infoContainer:{
        backgroundColor: COLORS.tertiary,
        padding: 10,
        marginVertical: 15,
        borderRadius: 20,
        alignContent: 'center',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column',
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