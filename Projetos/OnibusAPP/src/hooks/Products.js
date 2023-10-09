import { addDoc, collection, getDocs } from 'firebase/firestore'
import { Alert } from 'react-native'
import { db } from '../services/Firebase'

const useProducts = () => {

  const database = collection(db, 'products')

  const getAll = async () => {
    try {
      const data = []
      const snapshoot = await getDocs(database)
      snapshoot.forEach(e => data.push({ id: e.id, ...e.data() }))
      return data
    } catch (error) {
      Alert.alert('Erro...', 'Erro ao recuperar os dados.')
    }

  }
  const create = async (body) => {
    try {
      await addDoc(database, { nome: body.nome, valor: Number(body.valor) })
      Alert.alert('Sucesso...', 'Dados gravados com sucesso.')
    } catch (error) {
      Alert.alert('Erro...', 'Erro ao gravar os dados.')
    }
  }

  return {
    getAll,
    create,
  }
}

export default useProducts
export { useProducts }
