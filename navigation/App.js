/**
 yarn add react-navigation
 yarn add react-navigation-safe-area-context //dùng cho đt có tai thỏ
 yarn add @react-navigation/bottom-tabs
 yarn add @react-navigation/native
 yarn add @react-navigation/native-stack // dùng để di chuyển từ màn hình này sang màn hình kia
 yarn add react-native-screens
 */

import React, { useState, useEffect } from 'react';
import { Settings, ProductGridView, FoodList } from '../screens'
import { createBottomTabNavigation } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { fontSizes, colors } from '../constants'
import { Welcome, Login, Register, Messenger } from '../screens'
import UITabView from './UITabView'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

const App = (props) => {
    return <NavigationContainer style={{}}>
        <Stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }} >
            <Stack.Screen name={'Welcome'} component={Welcome}></Stack.Screen>
            <Stack.Screen name={'Login'} component={Login}></Stack.Screen>
            <Stack.Screen name={'Register'} component={Register}></Stack.Screen>
            <Stack.Screen name={'UITabView'} component={UITabView}></Stack.Screen>
            <Stack.Screen name={'Messenger'} component={Messenger}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer >
}

export default App