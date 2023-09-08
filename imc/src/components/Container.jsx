import React from 'react'
import { SafeAreaView, View } from 'react-native'
import Styles from '../styles'

const Container = ({ children }) => {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.container}>
        {children}
      </View>
    </SafeAreaView>
  )
}

export default Container
export { Container }

