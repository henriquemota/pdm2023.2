import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useCEP } from '../hooks'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    padding: 8,
    marginVertical: 4,
    flex: 1,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    justifyContent: 'space-between'
  },
  button: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    padding: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    alignSelf: 'center'
  },
  card: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    backgroundColor: '#fff',
    marginVertical: 16
  },
})

const Home = () => {
  const [animating, setAnimating] = useState(false)
  const [address, setAddress] = useState(null)
  const [cep, setCEP] = useState('')
  const { navigate } = useNavigation()
  const { getAddress } = useCEP()

  return (
    <View style={Styles.container}>
      <Text>Informe seu CEP</Text>
      <View style={Styles.inputGroup}>
        <TextInput
          style={Styles.textInput}
          placeholder='Informe o CEP'
          onChangeText={text => setCEP(text)}
        />
        <TouchableOpacity
          disabled={animating}
          style={Styles.button}
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
          <Text style={Styles.buttonText}>Localizar</Text>
          <ActivityIndicator animating={animating} />
        </TouchableOpacity>
      </View>

      {address &&
        <View style={Styles.card}>
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