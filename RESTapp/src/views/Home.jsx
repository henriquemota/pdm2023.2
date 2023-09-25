import { useNavigation } from '@react-navigation/native'
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useCEP } from '../hooks'
import { useState } from 'react'

const Home = () => {
  const [animating, setAnimating] = useState(false)
  const [address, setAddress] = useState(null)
  const [cep, setCEP] = useState('')
  const { navigate } = useNavigation()
  const { getAddress } = useCEP()

  return (
    <View>
      <Text>Informe seu CEP</Text>
      <TextInput
        style={{ padding: 8, border: 1, borderColor: '#000' }}
        placeholder='Informe o CEP'
        onChangeText={text => setCEP(text)}
      />
      <TouchableOpacity
        onPress={() => {
          setAnimating(true)
          setTimeout(() => {
            getAddress(cep)
              .then(r => setAddress(r))
              .catch(() => setAddress(null))
              .finally(() => setAnimating(false))
          }, 1500)
        }}
      >
        <Text>Localizar</Text>
        <ActivityIndicator animating={animating} />
      </TouchableOpacity>

      {address &&
        <View>
          <Text>cep: {address.cep}</Text>
          <Text>logradouro: {address.logradouro} </Text>
          <Text>complemento: {address.coplemento}</Text>
          <Text>bairro: {address.bairro} </Text>
          <Text>localidade: {address.localidade} </Text>
          <Text>uf: {address.uf} </Text>
          <Text>ibge: {address.ibge} </Text>
          <Text>gia: {address.gia} </Text>
          <Text>ddd: {address.ddd} </Text>
          <Text>siafi: {address.safi} </Text>
        </View>
      }

    </View>
  )
}

export default Home