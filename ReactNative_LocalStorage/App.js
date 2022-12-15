import { View} from 'react-native'
import React from 'react'

import DemoLocalStorage from './src/DemoLocalStorage'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './src/Login/Login'
import HomePage from './src/HomePage/HomePage'
import { KEY_SCREENS } from './src/common/Constant'
import { Provider } from 'react-redux'
import { store } from './store'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={KEY_SCREENS.login} component={Login}/>
          <Stack.Screen name={KEY_SCREENS.homepage} component={HomePage}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}