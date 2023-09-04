import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import useIMC from '../hooks/imc'
import { Styles } from '../styles/Styles'

export default function IMC() {
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [imc, setIMC] = useState()
  const { calcularIMC } = useIMC()

  return (
    <View style={Styles.container}>
      <View></View>
      <Text style={Styles.title}>IMC</Text>
      <TextInput
        style={Styles.input}
        placeholder='informe o peso em KG'
        onChangeText={setPeso}
      />
      <TextInput
        style={Styles.input}
        placeholder='informe altura. Ex.: 1.74'
        onChangeText={setAltura}
      />
      <TouchableOpacity
        style={Styles.button}
        onPress={() => setIMC(calcularIMC(peso, altura))}
      >
        <Text style={Styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
      <Text style={Styles.message}>{imc}</Text>
    </View>
  )
}
