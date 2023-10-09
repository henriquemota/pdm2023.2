import { FontAwesome5 } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import logo from '../assets/estacio.jpg'

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#134bcb',
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  logo: {
    alignSelf: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#43b3a4',
    borderRadius: 4,
    backgroundColor: '#f3f3f3',
    padding: 6,
    marginVertical: 8,
    fontSize: 18,
  },
  social: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  console: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 16,
  },
})

const Login = () => {
  const { navigate } = useNavigation()

  return (
    <View style={Styles.container}>
      <Image source={logo} style={Styles.logo} />
      <TextInput
        style={Styles.input}
        placeholder='informe seu email'
        keyboardType='email-address'
        autoCapitalize='none'
      />
      <TextInput
        style={Styles.input}
        placeholder='informe sua senha'
        keyboardType='default'
        secureTextEntry={true}
        autoCapitalize='none'
      />
      <Button
        title='Entrar'
        onPress={() => navigate('Home')}
      />
      <View style={Styles.social}>
        <FontAwesome5 name='google' size={32} color='#f3f3f3' />
        <FontAwesome5 name='facebook' size={32} color='#f3f3f3' />
      </View>
      <View style={Styles.console}>
        <Text style={{ color: '#f3f3f3' }}>Registre-se</Text>
        <Text style={{ color: '#f3f3f3' }}>Esqueci minha senha</Text>
      </View>

    </View>
  )
}

export default Login
