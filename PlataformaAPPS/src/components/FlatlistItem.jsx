import React from 'react'
import { Text, View } from 'react-native'
import Styles from '../styles'

const FlatlistItem = ({ item }) => {
  return (
    <View style={Styles.itemContainer}>
      <Text style={Styles.itemText}>{item}</Text>
    </View>
  )
}

export default FlatlistItem
export { FlatlistItem }

