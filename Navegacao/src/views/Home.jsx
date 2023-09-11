import React from 'react'
import { Dimensions, FlatList, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home() {
  const { width } = Dimensions.get('window')

  const DATA = [
    { id: 1, data: '2023-09-01', valor: 30.56, tipo: 'D' },
    { id: 2, data: '2023-09-01', valor: 130.32, tipo: 'C' },
    { id: 3, data: '2023-09-01', valor: 80.50, tipo: 'D' },
    { id: 4, data: '2023-09-01', valor: 130.00, tipo: 'C' },
    { id: 5, data: '2023-09-01', valor: 56.28, tipo: 'C' },
    { id: 6, data: '2023-09-01', valor: 70.46, tipo: 'C' },
  ]
  const total = DATA
    .map(m => m.tipo === 'D' ? Number(m.valor) * -1 : Number(m.valor))
    .reduce((ant, nov) => ant + nov, 0)

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fbfb33', }}>
      <View style={{ backgroundColor: '#fbfb33', flex: 1, alignItems: 'center' }}>

        <View style={{ flexDirection: 'row', width: width - 16, justifyContent: 'space-between', padding: 8 }}>
          <Text style={{ fontWeight: 'bold', color: '#445cfa', fontSize: 20 }}>Olá Henrique</Text>
          <Text style={{ fontWeight: 'bold', color: '#445cfa', fontSize: 20 }}>Saldo: R$ {total.toFixed(2).toLocaleString('pt-BR')}</Text>
        </View>

        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={item => item.id}
        />

      </View>
    </SafeAreaView>
  )
}

function Item({ item }) {
  const { width } = Dimensions.get('window')

  return (
    <View style={{ padding: 4, flexDirection: 'row', width: width - 8, justifyContent: 'space-around' }} >
      <Text>{item.data}</Text>
      <Text>{item.valor}</Text>
      <Text style={{ fontWeight: 'bold', color: item.tipo === 'D' ? '#ff0000' : '#445cfa' }}>{item.tipo}</Text>
    </View>
  )
}