import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import useProducts from '../hooks/Products'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#6a6a6a',
    padding: 6,
    marginVertical: 8,
  },
})

const Product = () => {
  const [product, setProduct] = useState({ nome: null, valor: null })
  const { create } = useProducts()

  return (
    <View style={Styles.container}>
      <Text>Nome</Text>
      <TextInput
        style={Styles.input}
        autoCapitalize='none'
        onChangeText={text => setProduct({ ...product, nome: text })}
      />
      <Text>Valor</Text>
      <TextInput
        style={Styles.input}
        keyboardType='numbers-and-punctuation'
        autoCapitalize='none'
        onChangeText={text => setProduct({ ...product, valor: text })}
      />
      <Button
        title='Salvar'
        onPress={() => create(product)}
      />
    </View>
  )
}

export default Product
