import { useNavigation } from '@react-navigation/native'
import { Button, Text, View } from 'react-native'

function Login() {
  const { navigate } = useNavigation()

  return (
    <View>
      <Text>Login</Text>
      <Button
        title='Navegar para home'
        onPress={() => navigate('Home')}
      />
      <Button
        title='Navegar para extrato'
        onPress={() => navigate('Extrato')}
      />
    </View>
  )
}

export default Login