import { getApp, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_apiKey,
  authDomain: process.env.EXPO_PUBLIC_authDomain,
  projectId: process.env.EXPO_PUBLIC_projectId,
  storageBucket: process.env.EXPO_PUBLIC_storageBucket,
  messagingSenderId: process.env.EXPO_PUBLIC_messagingSenderId
}

const createFirebaseApp = (config = {}) => {
  try {
    return getApp()
  } catch (error) {
    return initializeApp(config)
  }
}

const app = createFirebaseApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export { auth, db }

