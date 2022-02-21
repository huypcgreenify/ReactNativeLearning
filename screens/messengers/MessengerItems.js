import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard } from 'react-native'
import { images, colors, icons, fontSizes } from '../../constants'
import Icon from 'react-native-vector-icons/FontAwesome'

const MessengerItems = (props) => {
    
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


        </TouchableOpacity>
    )
}

export default MessengerItems