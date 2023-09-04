import React from 'react'
import Styles from '../styles/Styles'

export default function Text({ text }) {
  return (
    <Text style={Styles.message}>{text}</Text>
  )
}
