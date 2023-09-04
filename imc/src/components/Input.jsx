import React from 'react'
import { TextInput } from 'react-native'
import Styles from '../styles/Styles'

export default function Input({ placehonder, onChangeText, ...rest }) {

  return (
    <TextInput
      style={Styles.input}
      placeholderTextColor='#a3a3a3'
      placeholder={placehonder}
      onChangeText={onChangeText}
      {...rest}
    />
  )
}
