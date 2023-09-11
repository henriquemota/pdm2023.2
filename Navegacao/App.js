import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'


// importacao das views
import Home from './src/views/Home'
import Login from './src/views/Login'
import Settings from './src/views/Settings'

// criacao do componente de stack
const Stack = createNativeStackNavigator()
// criacao do componente de tab
const Tab = createBottomTabNavigator()

function TabRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeTab" component={Home} />
      <Tab.Screen name="SettingsTab" component={Settings} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={TabRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

