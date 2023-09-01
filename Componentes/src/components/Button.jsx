import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from '../styles'

function Button({ label, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  )
}

export default Button
export { Button }
