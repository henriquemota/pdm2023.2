import React from 'react'
import { Text } from 'react-native'
import { Styles } from '../styles/Styles'

function Label({ text, title }) {
  return (
    <Text style={[Styles.text, title ? Styles.textTitle : Styles.textSubTitle]}>
      {text}
    </Text>
  )
}

export default Label
