import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native'
import useAuth from '../hooks/Auth'

const Home = () => {
  const [user, setUser] = useState()
  const { signout } = useAuth()

  useEffect(() => {
    AsyncStorage
      .getItem('user')
      .then(data => setUser(JSON.parse(data)))
  }, [])

  return (
    <View>
      <Text>Home</Text>
      <Text>{user?.email}</Text>
      <Text>{user?.uid}</Text>
      <Button
        title='Sair'
        onPress={signout}
      />
    </View>
  )
}

export default Home
