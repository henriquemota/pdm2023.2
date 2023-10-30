import { StatusBar } from 'expo-status-bar'
import { Button, SafeAreaView, Text, TextInput, View } from 'react-native'
import { Provider, useDispatch, useSelector } from 'react-redux'
import store from './src/store'
import { setUsuario } from './src/store/usuario'

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

const Home = () => {
  const dispatch = useDispatch()
  const { usuario, usuarios } = useSelector((state) => state.usuario)
  console.log(usuario, usuarios)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 4 }}>
        <TextInput
          style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 4, backgroundColor: 'rgba(0,0,0,0.1)', padding: 12 }}
          onChangeText={text => dispatch(setUsuario({ ...usuario, nome: text }))}
        />
      </View>
      <MyComp />
      <MyCompText />
      <MyComp />
      <MyCompText />
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const MyComp = ({ children }) => {
  const { usuario } = useSelector((state) => state.usuario)

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{'MyComp '.concat(usuario.nome)}</Text>
      {children}
    </View>
  )
}

const MyCompText = () => {
  const dispatch = useDispatch()

  return (
    <MyComp>
      <Button title='Alterar estado' onPress={() => dispatch(setUsuario({ idade: 0, nome: '' }))} />
    </MyComp>
  )
}
