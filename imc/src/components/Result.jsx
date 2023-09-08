import React from 'react'
import { Text } from 'react-native'
import Styles from '../styles'

const Result = ({ label }) => {
  return (
    <Text style={Styles.result}>{label}</Text>
  )
}

export default Result
export { Result }
