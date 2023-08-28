import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Styles } from '../styles/Styles'

function MeuBotao({ onPress, text }) {
  return (
    <TouchableOpacity style={Styles.button} onPress={onPress}>
      <Text style={Styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

export default MeuBotao
