import { useNavigation } from '@react-navigation/native'
import { Button, Text, View } from 'react-native'

function Extrato() {
  const { goBack, navigate } = useNavigation()
  return (
    <View>
      <Text>Extrato</Text>
      <Button
        title='Navegar para login'
        onPress={() => navigate('Login')}
      />
      <Button
        title='Voltar'
        onPress={() => goBack()}
      />
    </View>
  )
}

export default Extrato