import React, { useEffect, useState } from 'react'
import { Button, Dimensions, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import useProdutos from '../hooks/produtos'

const Styles = StyleSheet.create({
  textinput: {
    borderWidth: 1,
    borderColor: '#003344',
    borderRadius: 4,
    padding: 6,
    margin: 8,
  },
  label: {
    margin: 8,
    fontWeight: 600,
    fontSize: 16,
  },
})

const { width, height } = Dimensions.get('window')

const Products = () => {
  const [produto, setProduto] = useState({ nome: '', valor: 0, quantidade: 0 })
  const [produtos, setProdutos] = useState([])
  const { add, read } = useProdutos()

  useEffect(() => {
    read()
      .then(data => setProdutos(data))
  }, [])

  return (
    <View>
      <Text
        style={Styles.label}
      >
        Nome do produto
      </Text>
      <TextInput
        style={Styles.textinput}
        value={produto.nome}
        onChangeText={text => setProduto({ ...produto, nome: text })}
      />
      <Text
        style={Styles.label}
      >
        Valor
      </Text>
      <TextInput
        style={Styles.textinput}
        value={produto.valor.toString()}
        onChangeText={text => setProduto({ ...produto, valor: Number(text) })}
      />
      <Text
        style={Styles.label}
      >
        Quantidade
      </Text>
      <TextInput
        style={Styles.textinput}
        value={produto.quantidade.toString()}
        onChangeText={text => setProduto({ ...produto, quantidade: Number(text) })}
      />
      <Button
        title='incluir'
        onPress={() => {
          add(produto).then(() => {
            setProduto({ nome: '', valor: 0, quantidade: 0 })
            read()
              .then(data => setProdutos(data))
          })
        }}
      />
      <View style={{ margin: 8 }}>
        <FlatList
          data={produtos}
          renderItem={({ item }) => <Text style={{ width: width, marginVertical: 8 }}>{item.nome} - {item.valor} - {item.quantidade}</Text>}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  )
}

export default Products
