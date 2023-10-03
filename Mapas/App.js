import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

// importacao das views
import Details from './src/views/Details'
import Home from './src/views/Home'
import Login from './src/views/Login'
import Maps from './src/views/Maps'
import Products from './src/views/Products'

// cria o componente de navegacao por pilha
const Stack = createNativeStackNavigator()

const App = () => {

  console.log(process.env.EXPO_PUBLIC_apiKey)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Maps" component={Maps} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Products" component={Products} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}

export default App