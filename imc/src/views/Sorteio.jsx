import React, { useState } from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Styles from '../styles/Styles'

export default function Sorteio() {
  const [nome, setNome] = useState()
  const [lista, setLista] = useState([])

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Soretio</Text>
      <TextInput
        style={Styles.input}
        placeholder='informe o nome do participante'
        onChangeText={setNome}
        value={nome}
      />
      <TouchableOpacity
        style={Styles.button}
        onPress={() => {
          setLista([...lista, nome])
          setNome('')
        }}
      >
        <Text style={Styles.buttonText}>Incluir no sorteio</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.button}
        onPress={() => {
          setLista([])
          setNome('')
        }}
      >
        <Text style={Styles.buttonText}>Limpar lista</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.button}
        onPress={() => {
          console.log('aqui')
        }}
      >
        <Text style={Styles.buttonText}>Sortear</Text>
      </TouchableOpacity>
      <FlatList
        data={lista}
        renderItem={({ item }) => <Text style={Styles.item}>{item}</Text>}
        keyExtractor={item => item}
      />
    </View>
  )
}
