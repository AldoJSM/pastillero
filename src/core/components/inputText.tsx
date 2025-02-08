import {StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { COLORS } from '@core'

interface ButtonProps {
    text: string,
    oneTouch: () => void
}

export const inputText = () => {
  return (
    <TextInput style={style.input} /> 
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