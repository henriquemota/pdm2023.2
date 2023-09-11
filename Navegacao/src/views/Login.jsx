import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Styles from '../Styles'
import logo from '../assets/logo.jpg'

export default function Login() {
  const { navigate, goBack } = useNavigation()

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={Styles.container}>
      <View style={[Styles.container, { justifyContent: 'center' }]}>
        <Image source={logo} style={Styles.logo} />
        <Text style={[Styles.title, { alignSelf: 'center' }]}>Login</Text>
        <TextInput
          style={Styles.input}
          placeholder='informe seu usuário'
          autoCapitalize='none'
          keyboardType='email-address'
        />
        <TextInput
          style={Styles.input}
          placeholder='informe sua senha'
          autoCapitalize='none'
          secureTextEntry
          keyboardType='number-pad'
        />
        <TouchableOpacity
          style={Styles.button}
          onPress={() => navigate('Home')}
        >
          <Text style={Styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View >
    </KeyboardAvoidingView>
  )
}
