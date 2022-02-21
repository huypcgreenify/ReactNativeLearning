import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard } from 'react-native'
import { images, colors, icons, fontSizes } from '../../constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import { isValidEmail, isValidPassword } from '../../utilies/Validations'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const getColorFromStatus = (status) => {
    // if (status.toLowerCase().trim() === 'opening now') {
    //     return colors.success
    // } else if (status.toLowerCase().trim() === 'closing soon') {
    //     return colors.alert
    // } else if (status.toLowerCase().trim() === 'comming soon') {
    //     return colors.warning
    // }
    // return colors.success

    return status.toLowerCase().trim() == 'opening soon' ? colors.success :
        (status.toLowerCase().trim() == 'closing soon' ? colors.alert :
            (status.toLowerCase().trim() == 'comming soon' ? colors.warning : colors.success)) // refactor code
}

const FoodItems = (props) => {
    let { name, price, socialNetwork, status, url, website } = props.food// destructuring an object
    // debugger
    const { onPress } = props
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                height: 150,
                paddingTop: 20,
                paddingStart: 10,
                flexDirection: 'row',
            }}>
            <Image style={{
                width: 100,
                height: 100,
                resizeMode: 'cover',
                borderRadius: 10,
                marginRight: 10,
            }}
                source={{
                    uri: url
                }} />
            <View style={{
                flex: 1,
                marginRight: 10
            }}>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    fontWeight: 'bold',
                }}>
                    {name}
                </Text>
                <View style={{
                    height: 1,
                    backgroundColor: 'black',
                }} />
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{
                        color: colors.inactive,
                        fontSize: fontSizes.h6,
                    }}>Status: </Text>
                    <Text style={{
                        color: getColorFromStatus(status),
                        fontSize: fontSizes.h6,
                    }}>{status.toUpperCase()}</Text>
                </View>
                <Text style={{
                    color: colors.inactive,
                    fontSize: fontSizes.h6,
                }}>
                    Price: {price}
                </Text>
                <Text style={{
                    color: colors.inactive,
                    fontSize: fontSizes.h6,
                }}>
                    Food Type: Pizza
                </Text>
                <Text style={{
                    color: colors.inactive,
                    fontSize: fontSizes.h6,
                }}>
                    Website: {website}
                </Text>
                <View style={{ flexDirection: 'row', }}>
                    {socialNetwork['facebook'] != undefined &&
                        <Icon style={{ backgroundColor: colors.facebook, width: 20, height: 20, padding: 3, borderRadius: 10, marginRight: 5 }}
                            name='facebook'
                            size={15}
                            color={'white'} />}
                    {socialNetwork['twitter'] != undefined &&
                        <Icon style={{ backgroundColor: 'red', width: 20, height: 20, borderRadius: 10, paddingHorizontal: 3, paddingVertical: 1.5, marginRight: 5 }}
                            name='instagram'
                            size={16.5}
                            color={'white'} />}
                    {socialNetwork['instagram'] != undefined &&
                        <Icon style={{ backgroundColor: colors.facebook, width: 20, height: 20, padding: 3, borderRadius: 10, marginRight: 5 }}
                            name='twitter'
                            size={15}
                            color={'white'} />}
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default FoodItems