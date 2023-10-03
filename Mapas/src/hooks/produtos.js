import { addDoc, collection, getDocs } from 'firebase/firestore'
import { Alert } from 'react-native'
import { db } from '../services/firebase'

const useProdutos = () => {

  const colecao = collection(db, "produtos")

  const read = async () => {
    try {
      const qs = await getDocs(colecao)
      const result = []
      qs.forEach(doc => {
        const data = doc.data()
        result.push({ ...data, id: doc.id })
      })
      return result
    } catch (error) {
      Alert.alert('Erro...', 'Erros ocorreram.')
    }

  }

  const add = async (params) => {
    try {
      await addDoc(colecao, { ...params })
    } catch (error) {
      Alert.alert('Erro...', 'Erros ocorreram.')
    }
  }

  return {
    add,
    read,
  }
}

export default useProdutos
export { useProdutos }
