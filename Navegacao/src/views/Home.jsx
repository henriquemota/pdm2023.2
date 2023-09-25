import { useNavigation } from '@react-navigation/native'
import { Button, Text, View } from 'react-native'

function Home() {
  const { navigate } = useNavigation()

  return (
    <View>
      <Text>Home</Text>
      <Button
        title='Navegar para extrato'
        onPress={() => navigate('Extrato')}
      />
    </View>
  )
}

export default Home