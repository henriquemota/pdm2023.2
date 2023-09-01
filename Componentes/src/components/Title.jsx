import React from 'react'
import { Text } from 'react-native'
import styles from '../styles'

function Title({ label }) {
  return (
    <Text style={[styles.text, styles.textTitle]}>
      {label}
    </Text>
  )
}

export default Title
export { Title }

