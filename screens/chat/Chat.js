import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native'
import { UIHeader } from '../../components';
import { fontSizes } from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome5'
import ChatItems from '../chat/ChatItems';

const Chat = (props) => {
    //navigation
    const { navigation, route } = props
    //function of navigation to/back
    const { navigate, goBack } = navigation

    const [users, setUsers] = useState([
        {
            url: 'https://randomuser.me/api/portraits/women/35.jpg',
            name: 'Akakak',
            message: 'Hello, how are you?',
            numberOfUnreadMessages: 2
        },
        {
            url: 'https://randomuser.me/api/portraits/men/36.jpg',
            name: 'Akakak',
            message: 'Hello, how are you?',
            numberOfUnreadMessages: 22
        },
        {
            url: 'https://randomuser.me/api/portraits/men/37.jpg',
            name: 'Akakak',
            message: 'Hello, how are you?',
            numberOfUnreadMessages: 0
        },
        {
            url: 'https://randomuser.me/api/portraits/women/38.jpg',
            name: 'Akakak',
            message: 'Hello, how are you?',
            numberOfUnreadMessages: 22
        },
        {
            url: 'https://randomuser.me/api/portraits/women/39.jpg',
            name: 'Akakak',
            message: 'Hello, how are you?',
            numberOfUnreadMessages: 99
        },
        {
            url: 'https://randomuser.me/api/portraits/women/41.jpg',
            name: 'Akakak',
            message: 'Hello, how are you?',
            numberOfUnreadMessages: 22
        },
        {
            url: 'https://randomuser.me/api/portraits/women/42.jpg',
            name: 'Akakak',
            message: 'Hello, how are you?',
            numberOfUnreadMessages: 22
        },
        {
            url: 'https://randomuser.me/api/portraits/women/43.jpg',
            name: 'Akakak',
            message: 'Hello, how are you?',
            numberOfUnreadMessages: 22
        },
        {
            url: 'https://randomuser.me/api/portraits/women/44.jpg',
            name: 'Akakak',
            message: 'Hello, how are you?',
            numberOfUnreadMessages: 22
        },
        {
            url: 'https://randomuser.me/api/portraits/women/45.jpg',
            name: 'Akakak',
            message: 'Hello, how are you?',
            numberOfUnreadMessages: 22
        },
        {
            url: 'https://randomuser.me/api/portraits/women/46.jpg',
            name: 'Akakak',
            message: 'Hello, how are you?',
            numberOfUnreadMessages: 22
        },
        {
            url: 'https://randomuser.me/api/portraits/women/47.jpg',
            name: 'Akakak',
            message: 'Hello, how are you?',
            numberOfUnreadMessages: 22
        }
    ])

    return <View style={{}}>
        <UIHeader
            title='Notifications'
            leftIconName={'arrow-left'}
            rightIconName={'search'}
            onPressLeftIcon={() => {
                goBack()
            }}
            onPressRightIcon={() => {
                alert('phải')
            }}
        />
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingStart: 10
        }}>
            <Text style={{
                color: 'black',
                fontSize: fontSizes.h4
            }}>
                6 unread messages
            </Text>
            <Icon
                style={{ padding: 15 }}
                name={'star'}
                size={18}
                color={'black'}
                onPress={() => {
                    alert('delete message')
                }}></Icon>
        </View>
        <FlatList
            style={{
            }}
            keyExtractor={item => item.url}
            data={users}
            renderItem={({ item }) =>

                <ChatItems
                    onPress={() => {
                        navigate('Messenger', { user: item })
                    }}
                    user={item}
                    key={item.url}
                />}
        />
    </View>
}

export default Chat