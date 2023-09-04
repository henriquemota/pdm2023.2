import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Styles from '../styles/Styles'

export default function Button({ onPress, text, ...rest }) {
  return (
    <TouchableOpacity
      style={Styles.button}
      onPress={onPress}
      {...rest}
    >
      <Text style={Styles.buttonText}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}
