import React, { useState } from 'react'
import { FlatList, Text } from 'react-native'
import Button from '../components/Button'
import Container from '../components/Container'
import Input from '../components/Input'
import Title from '../components/Title'
import Styles from '../styles/Styles'

export default function Lista() {
  const [nome, setNome] = useState()
  const [lista, setLista] = useState([])

  return (
    <Container>
      <Title text='Lista de pessoas' />
      <Input
        onChangeText={setNome}
        value={nome}
        placehonder='aqui'
      />
      <Button
        onPress={() => {
          setLista([...lista, nome])
          setNome('')
        }}
        text='Incluir no sorteio'
      />
      <Button
        onPress={() => {
          setLista([])
          setNome('')
        }}
        text='Limpar lista'
      />
      <FlatList
        data={lista}
        renderItem={({ item }) => <Text style={Styles.item}>{item}</Text>}
        keyExtractor={item => item}
      />
    </Container>
  )
}
