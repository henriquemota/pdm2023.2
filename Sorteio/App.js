import React, { useState } from 'react'
import { Image, View } from 'react-native'
import Label from './src/components/Label'
import MeuBotao from './src/components/MeuBotao'
import logo from './src/images/logo.jpg'
import { Styles } from './src/styles/Styles'

export default function App() {
  const [variavel, setVariavel] = useState()

  function sortear() {
    const nomes = [
      'Thais',
      'Jairo',
      'Davi',
      'Paulo',
      'João',
      'Vitor',
      'Iane',
      'Artur',
      'Saimon',
      'Junior',
      'Franco'
    ]
    const randomico = Math.random()
    const pseudoIndice = randomico * nomes.length
    const indice = Math.floor(pseudoIndice)

    setVariavel(nomes[indice])
  }

  return (
    <View style={Styles.container}>
      <Image style={Styles.image} source={logo} />
      <Label text='Bem vindo ao APP Sorteio' title />
      <Label text='Vamos ver quem vai para AV3' />
      <MeuBotao text='Sortear' onPress={sortear} />
      <MeuBotao text='Limpar' onPress={function () { setVariavel('') }} />
      <Label text={variavel} />
    </View>
  )
}

