import React, { useState, useEffect } from "react"
import { Text, View, Image, ImageBackground, TouchableOpacity } from "react-native"
import { images, icons, colors, fontSizes } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import { UIButton } from '../components'

const Welcome = (props) => {
    //state => khi 1 state thay đổi thì UI sẽ được load lại
    //Biến thành getter và setter
    const [accountTypes, setAccountTypes] = useState([
        {
            name: 'Influence',
            isSelected: true,
            alertShow: 'Alo1'
        },
        {
            name: 'Business',
            isSelected: false,
            alertShow: 'Alo2'
        },
        {
            name: 'Individual',
            isSelected: false,
            alertShow: 'Alo3'
        },
    ])
    //navigation
    const { navigation, route } = props
    //function of navigation to/back
    const { navigate, goBack } = navigation

    return <View style={{ backgroundColor: 'white', flex: 1 }}>
        <ImageBackground
            source={images.background}
            resizeMode='cover'
            style={{ flex: 1 }}>

            <View style={{ flex: 0.2, }}>
                <View style={{
                    flexDirection: 'row',
                    height: 50,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}>
                    <Image source={icons.iconFire}
                        style={{
                            width: 30, height: 30, marginStart: 5, marginEnd: 2
                        }} />
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>HUYPCCOMPANY.CO</Text>
                    <View style={{ flex: 1 }}></View>
                    <Icon
                        size={20}
                        color={'white'}
                        name={'question-circle'}
                        style={{
                            marginEnd: 10
                        }} />

                    {/*<Image source={icons.iconQuestion}
                        style={{
                            width: 20, height: 20, tintColor: 'white', marginEnd: 10
                        }} />*/}
                </View>
            </View>
            <View style={{
                flex: 0.2,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Text style={{ marginBottom: 7, color: 'white', fontSize: fontSizes.h6 }}>Welcome to</Text>
                <Text style={{ marginBottom: 7, color: 'white', fontWeight: 'bold', fontSize: fontSizes.h5 }}>HUYPCCOMPANY.CO!</Text>
                <Text style={{ marginBottom: 7, color: 'white', fontSize: fontSizes.h6 }}>Please select your account type</Text>
            </View>
            <View style={{ flex: 0.4, }}>
                {accountTypes.map(accountType =>
                    <UIButton onPress={() => {
                        setAccountTypes(accountTypes.map(eachAccountType => {
                            alert(accountType.alertShow)
                            return {
                                ...eachAccountType,
                                isSelected: eachAccountType.name == accountType.name
                            }
                        }))
                    }}
                        key={accountType.name}
                        title={accountType.name}
                        isSelected={accountType.isSelected} >
                    </UIButton>
                )}
            </View>
            <View style={{ flex: 0.2, }}>
                <UIButton title={'Login'.toUpperCase()}
                    onPress={() => {
                        navigate('Login')
                    }} />
                <Text style={{ fontSize: fontSizes.h6, color: 'white', alignSelf: 'center' }}>Want to register new Account?</Text>
                <TouchableOpacity
                    onPress={() => alert('Alo123')}
                    style={{ padding: 5 }}>
                    <Text style={{
                        fontSize: fontSizes.h6, color: colors.primary,
                        alignSelf: 'center', textDecorationLine: 'underline'
                    }}>Register</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground >

    </View >
}

export default Welcome