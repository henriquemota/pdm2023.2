import axios from 'axios'
import { Alert } from 'react-native'

const useCEP = () => {

  const getAddress = async (cep) => {
    try {
      const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      return data
    } catch (error) {
      Alert.alert('Erro...', 'Erro ao tentar localizar o endereço.')
      return null
    }
  }

  return {
    getAddress,
  }
}

export default useCEP
export { useCEP }
