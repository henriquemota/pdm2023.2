import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Button, FlatList, Text, View } from 'react-native'
import useProducts from '../hooks/Products'

const Products = () => {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const { getAll } = useProducts()
  const { navigate } = useNavigation()

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    setLoading(true)
    getAll()
      .then(data => setProducts(data))
      .finally(() => setLoading(false))
  }

  return (
    <View style={{ flex: 1 }}>
      <Button
        title='Novo produto'
        onPress={() => navigate('Product')}
      />
      <FlatList
        data={products}
        renderItem={({ item }) => <Item nome={item.nome} valor={item.valor} />}
        keyExtractor={item => item.id}
        refreshing={loading}
        onRefresh={getData}
      />
    </View>
  )
}

const Item = ({ nome, valor }) => {
  return (
    <View style={{ padding: 8 }}>
      <Text>{nome} - {valor}</Text>
    </View>
  )
}

export default Products
