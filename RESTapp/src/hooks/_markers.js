import axios from 'axios'
import { Alert } from 'react-native'

const useMarkers = () => {

  const getAll = async () => {
    try {
      const url = 'https://workshop20230611-default-rtdb.firebaseio.com/marcadores.json'
      const { data } = await axios.get(url)
      return data
    } catch (error) {
      Alert.alert('Erro...', 'Ops...erros ocorreram.')
      return []
    }

  }

  return {
    getAll,
  }
}

export default useMarkers
export { useMarkers }
