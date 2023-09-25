import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

const Stack = createNativeStackNavigator()

// importa as views
import CEP from './src/views/CEP'
import Home from './src/views/Home'
import Mapas from './src/views/Mapas'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='CEP' component={CEP} />
        <Stack.Screen name='Mapas' component={Mapas} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

