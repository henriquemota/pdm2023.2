import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

const Stack = createNativeStackNavigator()

// importa as views
import Extrato from './src/views/Extrato'
import Home from './src/views/Home'
import Login from './src/views/Login'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Extrato' component={Extrato} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

