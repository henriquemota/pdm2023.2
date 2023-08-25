import React, { useState } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import logo from './images/logo.png'

export default function App() {
  const [resultado, setResultado] = useState()

  function sortear() {
    const pessoas = [
      'Kevin',
      'Rafael',
      'Matheus',
      'Pablo',
      'Zidane',
      'Ervansue',
      'Paulo',
      'Felipe',
      'Gustavo',
      'João Vitor'
    ]
    const randomico = Math.random()
    const indice = randomico * pessoas.length
    const indiceInteiro = Math.floor(indice)
    setResultado(`O vencedor foi ${pessoas[indiceInteiro]}`)
    // Alert.alert('Resultado do sorteio', `O vencedor foi ${pessoas[indiceInteiro]}`)
  }

  const Estilos = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#144bc8',
      justifyContent: 'center'
    },
    texto: {
      color: '#ffffff',
      fontWeight: '600',
      fontSize: 24,
      alignSelf: 'center',
      marginVertical: 8
    },
    resultado: {
      fontWeight: '900',
      fontSize: 32,
    },
  })

  return (
    <View style={Estilos.container}>
      <Image source={logo} style={{ alignSelf: 'center' }} />
      <Text style={[Estilos.texto]}>Estácio</Text>
      <Text style={[Estilos.texto]}>Sorteio de final de semestre</Text>

      <Button
        title='Clique para sortear'
        color='#ffffff'
        onPress={sortear}
      />
      <Button
        title='Redefinir'
        color='#ffffff'
        onPress={function () { setResultado('') }}
      />
      <Text style={[Estilos.texto, Estilos.resultado]}>
        {resultado}
      </Text>

    </View>
  )
}
