import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'

export default function Settings() {
  const { navigate, goBack } = useNavigation()

  return (
    <View style={{ backgroundColor: '#fff', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings</Text>
      <Button
        title='Voltar'
        onPress={goBack}
      />
    </View>
  )
}
