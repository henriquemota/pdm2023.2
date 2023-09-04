import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { Styles } from '../styles/Styles'

export default function Container({ children }) {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.container}>
        {children}
      </View>
    </SafeAreaView>
  )
}
