import React from 'react'
import { Text } from 'react-native'
import styles from '../styles'

function SubTitle({ label }) {
  return (
    <Text style={[styles.text, styles.textSubTitle]}>
      {label}
    </Text>
  )
}

export default SubTitle
export { SubTitle }

