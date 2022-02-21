import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native'
import { UIHeader } from '../../components';
import { fontSizes } from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome5'
import MessengerItems from './MessengerItems'

const Messenger = (props) => {

    //function of navigation to/back
    const { navigate, goBack } = props.navigation

    const [chatHistory, setChatHistory] = useState([
        {
            url: 'https://randomuser.me/api/portraits/women/35.jpg',
            isSender: true,
            messengers: 'Hello',
            timestamp: 1645450082000,
        },
        {
            url: 'https://randomuser.me/api/portraits/women/35.jpg',
            isSender: true,
            messengers: 'Hello, how are you?',
            timestamp: 1645450682000,
        },
    ])

    // alert(JSON.stringify(props.route.params.user))
    const { url, name } = props.route.params.user

    return <View style={{
        flexDirection: 'column',
    }}>
        <UIHeader
            title={name}
            leftIconName={'arrow-left'}
            rightIconName={'ellipsis-v'}
            onPressLeftIcon={() => {
                goBack()
            }}
            onPressRightIcon={() => {
                alert('phải')
            }}
        />
        <FlatList
            style={{
            }}
            keyExtractor={item => item.url}
            data={chatHistory}
            renderItem={({ item }) =>

                <MessengerItems
                    onPress={() => {
                        alert('Press: ' + item.name)
                    }}
                    user={item}
                    key={item.url} />}
        />
    </View>
}

export default Messenger