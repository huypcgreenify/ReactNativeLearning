/**
 yarn add react-navigation
 yarn add react-native-safe-area-context //dùng cho đt có tai thỏ
 yarn add @react-navigation/bottom-tabs
 yarn add @react-navigation/native
 yarn add @react-navigation/native-stack // dùng để di chuyển từ màn hình này sang màn hình kia
 yarn add react-native-screens
 */
import React, { useState, useEffect } from 'react';
import { Settings, ProductGridView, FoodList, Profile, Chat } from '../screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { fontSizes, colors } from '../constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Tab = createBottomTabNavigator()
const screenOptions = ({ route }) => ({
    headerShown: false,
    tabBarActiveTintColor: 'white',
    tabBarInactiveTintColor: colors.inactive,
    tabBarActiveBackgroundColor: colors.primary,
    tabBarInactiveBackgroundColor: colors.primary,
    tabBarIcon: ({ focused, coler, size }) => {// 3 thuộc tính chuẩn của đối tượng( focused là có bấm vào icon không, true à bấm vào)
        /*
                let screenName = route.name
                let iconName = 'facebook'
                if (screenName == 'ProductGridView') {
                    iconName = 'align-center'
                } else if (screenName == 'FoodList') {
                    iconName = 'accusoft'
                } else if (screenName == 'Settings') {
                    iconName = 'cogs'
                }
                return <Icon name={iconName} size={23} color={focused ? colors.primary : colors.inactive} />
        */

        return <Icon name={route.name == 'ProductGridView' ? 'align-center' :
            (route.name == 'FoodList' ? 'accusoft' :
                (route.name == 'Settings' ? 'cogs' :
                    (route.name == 'Profile' ? 'user' :
                        (route.name == 'Chat' ? 'comment-dots' : '')
                    )
                )
            )}
            size={23} color={focused ? 'white' : colors.inactive} />
    },
})

const UITableView = (props) => {
    return <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
            name={'ProductGridView'}
            component={ProductGridView}
            options={
                { tabBarLabel: 'Products' }
            }></Tab.Screen>
        <Tab.Screen
            name={'Chat'}
            component={Chat}
            options={
                { tabBarLabel: 'Chat' }
            }></Tab.Screen>
        <Tab.Screen
            name={'FoodList'}
            component={FoodList}
            options={
                { tabBarLabel: 'Foods' }
            } ></Tab.Screen>
        <Tab.Screen
            name={'Settings'}
            component={Settings}
            options={
                { tabBarLabel: 'Settings' }
            }></Tab.Screen>
        <Tab.Screen
            name={'Profile'}
            component={Profile}
            options={
                { tabBarLabel: 'Profile' }
            }></Tab.Screen>

    </Tab.Navigator>
}

export default UITableView