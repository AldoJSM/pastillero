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

export  const primaryButton = ({text,oneTouch}:ButtonProps) => {
    return (
      <TouchableOpacity style={styles.pButton} onPress={oneTouch}>
          <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    )
  }

const styles = StyleSheet.create({
    pButton:{
        backgroundColor: COLORS.primary,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 10, 
    },
    button: {
        backgroundColor: COLORS.secondary,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center', 
    },
    text:{
        color: COLORS.white,
        fontSize: 16,
        fontWeight: 'bold',
    }
    })