import React from 'react'
import { Text } from 'react-native'
import { Styles } from '../styles/Styles'

export default function Title({ text }) {
  return (
    <Text style={Styles.title}>{text}</Text>
  )
}
