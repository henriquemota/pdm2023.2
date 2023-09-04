import React, { useState } from 'react'
import Button from '../components/Button'
import Container from '../components/Container'
import Input from '../components/Input'
import Text from '../components/Text'
import Title from '../components/Title'
import useIMC from '../hooks/imc'


export default function IMC() {
  const [loading, setLoading] = useState(false)
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [imc, setIMC] = useState('')
  const { calcularIMC } = useIMC()

  console.log(imc)

  return (
    <Container>
      <Title text='IMC' />
      <Input
        placehonder='Peso em KG'
        onChangeText={setPeso}
        value={peso}
      />
      <Input
        placehonder='Altura no formato ex.: 1.74'
        onChangeText={setAltura}
        value={altura}
      />
      <Button
        text='Calcular IMC'
        onPress={() => setIMC(calcularIMC(peso, altura))}
      />
      <Text text={imc} />
    </Container>
  )
}
