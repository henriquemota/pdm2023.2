import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'

const Home = () => {
  const { navigate } = useNavigation()

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
      <Button
        title='Vai para maps'
        onPress={() => navigate('Maps')}
      />
      <Button
        title='Vai para produtos'
        onPress={() => navigate('Products')}
      />

    </View>
  )
}

export default Home
