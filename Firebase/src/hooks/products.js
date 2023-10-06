import { addDoc, collection } from "firebase/firestore"
import { Alert } from 'react-native'
import { db } from '../services/firbase'

const usePorducts = () => {

  const doc = collection(db, "products")

  const insert = async (params) => {
    try {
      await addDoc(doc, { ...params })
      Alert.alert('Sucesso...', 'Produto inserido com sucesso')
    } catch (e) {
      Alert.alert('Erro...', 'Erro ao inserir produto')
    }
  }

  return {
    insert,
  }
}

export default usePorducts