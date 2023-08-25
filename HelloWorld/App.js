import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function App() {
  const estilos = StyleSheet.create({
    tamanho: {
      height: 100,
      width: 100,
    },
    arredondar: {
      borderRadius: 50,
      margin: 20,
    },
    corDeFundoVermelho: {
      backgroundColor: '#ff0000',
    },
    corDeFundoVerde: {
      backgroundColor: '#00ff00',
    },
    corDeFundoAzul: {
      backgroundColor: '#0000ff',
    },
  })

  return (
    <View>
      <View style={[estilos.tamanho, estilos.arredondar, estilos.corDeFundoVermelho]}>
      </View>
      <View style={[estilos.tamanho, estilos.arredondar, estilos.corDeFundoAzul]}>
      </View>
      <View style={[estilos.tamanho, estilos.arredondar, estilos.corDeFundoVerde]}>
      </View>
    </View>
  )

}
