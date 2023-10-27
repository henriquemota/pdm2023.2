import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Button, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput } from 'react-native'
import useAuth from '../hooks/Auth'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  textInput: {
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginVertical: 4,
  },
})

const Login = () => {
  const [data, setData] = useState({ email: '', senha: '' })
  const { signin } = useAuth()
  const { navigate } = useNavigation()

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      if (user) navigate('Home')
    })
  }, [])

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Text>Email</Text>
      <TextInput
        autoCapitalize='none'
        style={styles.textInput}
        onChangeText={text => setData({ ...data, email: text })}
        value={data.email}
      />
      <Text>Senha</Text>
      <TextInput
        autoCapitalize='none'
        secureTextEntry
        style={styles.textInput}
        onChangeText={text => setData({ ...data, senha: text })}
        value={data.senha}
      />
      <Text>{JSON.stringify(data)}</Text>
      <Button
        title='Login'
        onPress={() => signin(data)}
      />
    </KeyboardAvoidingView>
  )
}

export default Login
