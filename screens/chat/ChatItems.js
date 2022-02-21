import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard } from 'react-native'
import { images, colors, icons, fontSizes } from '../../constants'
import Icon from 'react-native-vector-icons/FontAwesome'

const ChatItems = (props) => {
    let {
        url,
        name,
        message,
        numberOfUnreadMessages,
    } = props.user// destructuring an object
    // debugger
    const { onPress } = props
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                height: 90,
                paddingTop: 20,
                paddingStart: 10,
                flexDirection: 'row',
            }}>
            <View>
                <Image style={{
                    width: 50,
                    height: 50,
                    resizeMode: 'cover',
                    borderRadius: 25,
                    marginRight: 10,
                }}
                    source={{
                        uri: url
                    }} />
                <Text style={{
                    position: 'absolute',
                    width: 15,
                    top: -5,
                    right: 10,
                    backgroundColor: 'red',
                    padding: 2,
                    color: 'white',
                    borderRadius: 25,
                    fontSize: fontSizes.h6 * 0.8,
                    textAlign: 'center'
                }}>{numberOfUnreadMessages}</Text>
            </View>
            <View style={{ flexDirection: 'column', }}>
                <Text style={{
                    fontWeight: 'bold',
                    color: 'black',
                    fontSize: fontSizes.h4
                }}>{name}</Text>
                <Text style={{
                    fontSize: fontSizes.h4
                }}>{message}</Text>
            </View>
            <View style={{ flex: 1 }}></View>
            <View style={{
                flexDirection: 'column',
            }}>
                <Text style={{
                    fontSize: fontSizes.h5 * 0.8,
                    marginRight: 10
                }}>4 minutes ago</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ChatItems