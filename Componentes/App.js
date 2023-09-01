import React, { useState } from 'react'
import { Image, View } from 'react-native'
import Button from './src/components/Button'
import SubTitle from './src/components/SubTitle'
import Title from './src/components/Title'
import logo from './src/images/logo.jpg'
import styles from './src/styles'

export default function App() {
  const [indice, setIndice] = useState()

  function sortear() {
    const n = Math.random()
    const i = Math.ceil(n * 11)
    setIndice('O número sorteado foi ' + i)
  }

  function limpar() {
    setIndice('')
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={logo} />
      <Title label='Bem vindo ao APP Sorteio' />
      <SubTitle label='Vamos ver quem será o sorteado' />
      <Button label='Sortear' onPress={sortear} />
      <Button label='Limpar' onPress={limpar} />
      <SubTitle label={indice} />
    </View>
  )
}

