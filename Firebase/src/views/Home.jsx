import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import usePorducts from '../hooks/products'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#646464',
    borderRadius: 6,
    padding: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 4,
  },
  textInput: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#313131',
    marginVertical: 4
  },
})

const Home = () => {
  const [product, setProduct] = useState({ nome: null, preco: null })
  const { insert } = usePorducts()

  return (
    <View style={Styles.container}>
      <View style={Styles.card}>
        <Text style={Styles.text}>Nome</Text>
        <TextInput
          autoCapitalize='none'
          style={Styles.textInput}
          value={product.nome}
          onChangeText={(text) => setProduct({ ...product, nome: text })}
        />
        <Text style={Styles.text}>Preço</Text>
        <TextInput
          autoCapitalize='none'
          keyboardType='numbers-and-punctuation'
          style={Styles.textInput}
          value={product.preco}
          onChangeText={(text) => setProduct({ ...product, preco: text })}
        />
        <Button
          title='Inserir'
          onPress={() => {
            insert(product)
            setProduct({ nome: null, preco: null })
          }}
        />
      </View>
    </View>
  )
}

export default Home
