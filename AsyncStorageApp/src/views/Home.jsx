import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { Button, TextInput, View } from 'react-native'

const Home = () => {
  const [data, setData] = useState({ nome: '', idade: '' })

  useEffect(() => {
    AsyncStorage
      .getItem('pessoas')
      .then(e => setData(JSON.parse(e)))

  }, [])

  const gravarDados = () => {
    AsyncStorage
      .setItem('pessoas', JSON.stringify(data))
  }

  return (
    <View
      style={{ padding: 8 }}
    >
      <TextInput
        style={{ borderWidth: 1, borderColor: '#000', padding: 16, margin: 6 }}
        value={data.nome}
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

    </View>
  )
}

export default Home
