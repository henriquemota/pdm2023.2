import React from 'react'
import { Text } from 'react-native'
import Styles from '../styles'

const Title = ({ label }) => {
  return (
    <Text style={Styles.title}>{label}</Text>
  )
}

export default Title
export { Title }
