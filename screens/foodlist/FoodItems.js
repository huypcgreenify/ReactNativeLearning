import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard } from 'react-native'
import { images, colors, icons, fontSizes } from '../../constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import { isValidEmail, isValidPassword } from '../../utilies/Validations'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const FoodItems = (props) => {
    return (
        <View style={{
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
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Spaghettata.JPG'
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
                    La Casa Prn
                </Text>
                <View style={{
                    height: 1,
                    backgroundColor: 'black',
                }} />
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{
                        color: colors.inactive,
                        fontSize: fontSizes.h6,
                    }}>
                        Status:
                    </Text>
                    <Text style={{
                        color: 'orange',
                        fontSize: fontSizes.h6,
                    }}>
                        Opening soon
                    </Text>
                </View>
                <Text style={{
                    color: colors.inactive,
                    fontSize: fontSizes.h6,
                }}>
                    Price: 1234
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
                    Website: http://www.
                </Text>
                <View style={{ flexDirection: 'row', }}>
                    <Icon style={{ backgroundColor: colors.facebook, width: 20, height: 20, padding: 3, borderRadius: 10, marginRight: 5 }} name='facebook' size={15} color={'white'} />
                    <Icon style={{ backgroundColor: 'red', width: 20, height: 20, borderRadius: 10, paddingHorizontal: 3, paddingVertical: 1.5, marginRight: 5 }} name='instagram' size={16.5} color={'white'} />
                    <Icon style={{ backgroundColor: colors.facebook, width: 20, height: 20, padding: 3, borderRadius: 10, marginRight: 5 }} name='twitter' size={15} color={'white'} />
                </View>
            </View>
        </View>
    )
}

export default FoodItems