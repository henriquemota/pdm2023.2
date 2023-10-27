import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { signInWithEmailAndPassword } from "firebase/auth"
import { Alert } from 'react-native'
import { auth } from '../services/Firebase'

const useAuth = () => {
  const { navigate } = useNavigation()

  const signin = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.senha)
      .then((userCredential) => {
        const user = userCredential.user
        AsyncStorage.setItem('user', JSON.stringify(user))
        navigate('Home')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        AsyncStorage.removeItem('user')
        Alert.alert('Erro...', 'Usuário não localizado ou senha inválida.')
      })
  }

  const signout = () => {
    AsyncStorage.removeItem('user')
    navigate('Login')
  }

  return {
    signin,
    signout,
  }
}

export default useAuth
export { useAuth }
