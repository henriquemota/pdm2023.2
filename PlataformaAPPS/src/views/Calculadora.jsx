import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { Button, Container, Result, Title } from '../components'
import { useIMC } from '../hooks'
import Styles from '../styles'

const Calculadora = () => {
  const [peso, setPeso] = useState()
  const [altura, setAltura] = useState()
  const [resultado, setResultado] = useState('')
  const { calcularIMC } = useIMC()

  function calcular() {
    setResultado(calcularIMC(peso, altura.replace(',', '.')))
  }

  return (
    <Container>
      <Title label='Calculadora do IMC' />
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
      <Button label='Calcular IMC' onPress={calcular} />
      <Result label={resultado} />
    </Container>
  )
}

export default Calculadora
