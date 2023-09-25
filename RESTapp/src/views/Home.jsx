import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  button: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    padding: 6,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const Home = () => {
  const { navigate } = useNavigation()
  return (
    <View style={Styles.container}>
      <TouchableOpacity
        style={Styles.button}
        onPress={() => navigate('CEP')}
      >
        <Text>Cep</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.button}
        onPress={() => navigate('Mapas')}
      >
        <Text>Mapas</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home