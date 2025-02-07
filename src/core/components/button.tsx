import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { createElement } from 'react'
import { COLORS } from '@core'

interface ButtonProps {
    text: string,
    oneTouch: () => void
}

export const button = ({text,oneTouch}:ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={oneTouch}>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.primary,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center', 
    },
    text:{
        color: COLORS.white,
        fontSize: 16,
    }
    })