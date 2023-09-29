import axios from 'axios'
import { Alert } from 'react-native'

const useCEP = () => {

  const getAddress = async (cep) => {
    try {
      const { data } = await axios.get(`https://cep.awesomeapi.com.br/json/${cep}`)
      return data
    } catch (error) {
      Alert.alert('Erro...', 'Ops... erro ao processar o endereço')
    }
  }

  return {
    getAddress,
  }
}

export default useCEP
export { useCEP }
