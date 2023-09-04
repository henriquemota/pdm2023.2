import React, { useState } from 'react'
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from 'react-native'
import useIMC from '../hooks/imc'
import { Styles } from '../styles/Styles'

export default function IMC() {
  const [loading, setLoading] = useState(false)
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [imc, setIMC] = useState('')
  const { calcularIMC } = useIMC()

  return (
    <View style={Styles.container}>
      <View></View>
      <Text style={Styles.title}>IMC</Text>
      <TextInput
        style={Styles.input}
        placeholderTextColor='#a3a3a3'
        placeholder='informe o peso em KG'
        onChangeText={setPeso}
      />
      <TextInput
        style={Styles.input}
        placeholderTextColor='#a3a3a3'
        placeholder='informe altura. Ex.: 1.74'
        onChangeText={setAltura}
      />
      <TouchableOpacity
        style={Styles.button}
        disabled={loading}
        onPress={() => {
          setIMC('')
          setLoading(true)
          setTimeout(() => {
            setIMC(calcularIMC(peso, altura))
            setLoading(false)
          }, 5000)
        }}
      >
        <Text style={Styles.buttonText}>Calcular</Text>
        <ActivityIndicator animating={loading} size='large' />
      </TouchableOpacity>
      <Text style={Styles.message}>{imc}</Text>
    </View>
  )
}
