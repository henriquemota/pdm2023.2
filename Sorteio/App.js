import React from 'react'
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native'
import logo from './images/logo.png'

export default function App() {

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
    Alert.alert('Resultado do sorteio', `O vencedor foi ${pessoas[indiceInteiro]}`)
  }

  const Estilos = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#144bc8',
      justifyContent: 'center'
    },
    texto: {
      color: '#ffffff',
      fontWeight: '900',
      fontSize: 26,
      alignSelf: 'center',
      marginVertical: 8
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

    </View>
  )
}
