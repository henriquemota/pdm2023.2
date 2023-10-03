import { getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// import {...} from "firebase/auth";
// import {...} from "firebase/storage";

// configuracoes do firebase
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_apiKey,
  authDomain: process.env.EXPO_PUBLIC_authDomain,
  databaseURL: process.env.EXPO_PUBLIC_databaseURL,
  projectId: process.env.EXPO_PUBLIC_projectId,
  storageBucket: process.env.EXPO_PUBLIC_storageBucket,
  messagingSenderId: process.env.EXPO_PUBLIC_messagingSenderId,
  appId: process.env.EXPO_PUBLIC_apiKey,
}

// inicializa o firebase
let app = null
if (!getApps.length) {
  app = initializeApp(firebaseConfig)
}
// inicializa o firestore
const db = getFirestore(app)

// export os servicos
export { app, db }
