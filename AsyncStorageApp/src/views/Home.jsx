import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'

const Home = () => {
  const [list, setList] = useState([])
  const [data, setData] = useState({ nome: 'henrique', idade: '49' })

  const gravarDados = () => {
    AsyncStorage
      .setItem('pessoas', JSON.stringify(data))
      .then(e => console.log('deu certo'))
      .catch(e => console.log('erro'))
      .finally(() => console.log('aqui'))
  }

  const lerDados = () => {
    AsyncStorage
      .getItem('pessoas')
      .then(e => setList([...list, JSON.parse(e)]))
  }

  return (
    <View
      style={{ padding: 8 }}
    >
      <TextInput
        style={{ borderWidth: 1, borderColor: '#000', padding: 16, margin: 6 }}
        value={data?.nome}
        onChangeText={text => setData({ ...data, nome: text })}
      />
      <TextInput
        style={{ borderWidth: 1, borderColor: '#000', padding: 16, margin: 6 }}
        value={data.idade}
        onChangeText={text => setData({ ...data, idade: text })}
      />

      <Button
        title='Salvar'
        onPress={gravarDados}
      />
      <Button
        title='Ler dados'
        onPress={lerDados}
      />
      {list.map((el, ix) =>
        <View kei={ix}>
          <Text>{el.nome} - {el.idade}</Text>
        </View>
      )}
    </View>
  )
}

export default Home
