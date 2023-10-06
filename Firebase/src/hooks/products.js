import { addDoc, collection, getDocs } from "firebase/firestore"
import { Alert } from 'react-native'
import { db } from '../services/firbase'

const useProducts = () => {

  const doc = collection(db, "products")

  const insert = async (params) => {
    try {
      await addDoc(doc, { ...params })
      Alert.alert('Sucesso...', 'Produto inserido com sucesso')
    } catch (e) {
      Alert.alert('Erro...', 'Erro ao inserir produto')
    }
  }
  const all = async () => {
    const snapshoot = await getDocs(doc)
    const data = []
    snapshoot.forEach((doc) => data.push({ id: doc.id, ...doc.data() }))
    return data
  }

  return {
    insert,
    all,
  }
}

export default useProducts