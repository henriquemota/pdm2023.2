import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// cria a navegacao em pilha
const Stack = createNativeStackNavigator()

// importa as views
import Home from './src/views/Home'
import Login from './src/views/Login'
import Product from './src/views/Product'
import Products from './src/views/Products'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Products' component={Products} />
        <Stack.Screen name='Product' component={Product} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}