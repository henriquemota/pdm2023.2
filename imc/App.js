import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#420A70',
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 8
  },
  input: {
    padding: 16,
    backgroundColor: '#8E16F0',
    borderColor: '#B05EF2',
    borderWidth: 2,
    borderRadius: 4,
    margin: 8,
  },
  button: {
    padding: 16,
    backgroundColor: '#B05EF2',
    borderColor: '#6F11BD',
    borderWidth: 2,
    borderRadius: 16,
    margin: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'center',
  },
  result: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 32,
    alignSelf: 'center'
  },
})

export default function App() {
  const [peso, setPeso] = useState()
  const [altura, setAltura] = useState()
  const [resultado, setResultado] = useState('')

  function calcularIMC(peso, altura) {
    const imc = Number(peso) / (Number(altura) * Number(altura))
    if (imc < 18.5) return "Abaixo do peso"
    else if (imc >= 18.5 && imc < 24.9) return "Peso ideal"
    else if (imc >= 24.9 && imc < 29.9) return "Acima do peso"
    else if (imc >= 29.9 && imc < 34.9) return "Obseidade grau I"
    else if (imc >= 34.9 && imc < 39.9) return "Obseidade grau II (severa)"
    else return "Obseidade grau II (morbida)"
  }

  function calcular() {
    const r = calcularIMC(peso, altura.replace(',', '.'))
    setResultado(r)
  }

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Calculadora do IMC</Text>
      <TextInput style={Styles.input}
        placeholderTextColor='#fff'
        placeholder='Informe seu peso em KG - ex.: 100'
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput style={Styles.input}
        placeholderTextColor='#fff'
        placeholder='Informe sua altura em M - ex.: 1.74'
        value={altura}
        onChangeText={setAltura}
      />
      <TouchableOpacity style={Styles.button}
        onPress={calcular}
      >
        <Text style={Styles.buttonText}>Botao</Text>
      </TouchableOpacity>
      <Text style={Styles.result}>{resultado}</Text>
    </View>
  )
}

