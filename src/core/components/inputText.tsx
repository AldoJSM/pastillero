import {StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { COLORS } from '@core'

interface ButtonProps {
    value: string,
    onChangeText: (text: string) => void;
}

export const inputText = ({value,onChangeText}:ButtonProps) => {
  return (
    <TextInput 
    style={style.input} 
    value={value}
    onChangeText={onChangeText}
    /> 
  )
}

const style=StyleSheet.create({
    input:{
        width: 300,
        borderWidth: 1,
        borderColor: COLORS.black,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        marginBlock: 10,
        marginTop: 5,
    }
})