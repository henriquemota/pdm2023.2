import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'

const Login = () => {
  const { navigate } = useNavigation()

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login</Text>
      <Button
        title='Vai para home'
        onPress={() => navigate('Home')}
      />
    </View>
  )
}

export default Login
