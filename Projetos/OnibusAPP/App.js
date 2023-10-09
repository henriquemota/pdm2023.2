import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// cria a navegacao em pilha
const Stack = createNativeStackNavigator()

// importa as views
import Home from './src/views/Home'
import Login from './src/views/Login'
import Paradas from './src/views/Paradas'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Paradas' component={Paradas} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}