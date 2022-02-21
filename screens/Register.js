import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard, ScrollView } from 'react-native'
import { images, colors, icons, fontSizes } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import { isValidEmail, isValidPassword } from '../utilies/Validations'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Register = (props) => {
    const [keyboardIsShown, setKeyboardIsShown] = useState(false)
    //state for validating
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    //state to store email/password => lưu lại email và pass
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const isValidtionOk = () => email.length > 0 && password.length > 0
        && isValidEmail(email) == true && isValidPassword(password) == true

    useEffect(() => {
        //componentDidMount
        Keyboard.addListener('keyboardDidShow', () => { setKeyboardIsShown(true) })

        Keyboard.addListener('keyboardDidHide', () => { setKeyboardIsShown(false) })
    })

    //navigation
    const { navigation, route } = props
    //function of navigation to/back
    const { navigate, goBack } = navigation
    return <View style={{ flex: 1, backgroundColor: colors.primary }}>

        <View style={{ flex: 0.5, height: 150, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
            <Text style={{ color: 'white', fontSize: fontSizes.h1, fontWeight: 'bold', width: '30%' }}>Already have an Account?</Text>
            <Image style={{ width: 160, height: 100, alignItems: 'center' }} source={images.computer}></Image>
        </View>
        <KeyboardAwareScrollView style={{ flex: 0.1, backgroundColor: 'white', padding: 10, marginHorizontal: 10, borderRadius: 10 }}>
            <View style={{ marginHorizontal: 15 }}>
                <Text style={{ color: colors.primary, fontSize: fontSizes.h5 }}>Email:</Text>
                <TextInput onChangeText={(text) => {
                    // if (isValidEmail(text) == false) {
                    //     setErrorEmail('Email is not a valid email')
                    // } else { setErrorEmail('') }
                    setErrorEmail(isValidEmail(text) == true ? '' : 'Email not a valid email')
                    setEmail(text)
                }}
                    placeholder="example@gmail.com" placeholderTextColor={colors.placeholder} style={{ color: 'black', fontSize: fontSizes.h5, marginTop: -5 }}></TextInput>
                <View style={{ height: 1, backgroundColor: colors.primary, width: '100%', marginTop: -5 }}></View>
                <Text style={{ color: 'red', fontSize: fontSizes.h6, marginBottom: 10 }}>{errorEmail}</Text>
            </View>
            <View style={{ marginHorizontal: 15 }}>
                <Text style={{ color: colors.primary, fontSize: fontSizes.h5 }}>Password</Text>
                <TextInput onChangeText={(text) => {
                    setErrorPassword(isValidPassword(text) == true ? '' : 'Password must be at least 3 characters')
                    setPassword(text)
                }}
                    placeholder="Enter your password" placeholderTextColor={colors.placeholder} secureTextEntry={true} style={{ color: 'black', fontSize: fontSizes.h5, marginTop: -5 }}></TextInput>
                <View style={{ height: 1, backgroundColor: colors.primary, width: '100%', marginTop: -5 }}></View>
                <Text style={{ color: 'red', fontSize: fontSizes.h6, marginBottom: 10 }}>{errorPassword}</Text>
            </View>
            <View style={{ marginHorizontal: 15 }}>
                <Text style={{ color: colors.primary, fontSize: fontSizes.h5 }}>Retype Password</Text>
                <TextInput onChangeText={(text) => {
                    setErrorPassword(isValidPassword(text) == true ? '' : 'Password must be at least 3 characters')
                    setPassword(text)
                }}
                    placeholder="Re-Enter your password" placeholderTextColor={colors.placeholder} secureTextEntry={true} style={{ color: 'black', fontSize: fontSizes.h5, marginTop: -5 }}></TextInput>
                <View style={{ height: 1, backgroundColor: colors.primary, width: '100%', marginTop: -5 }}></View>
                <Text style={{ color: 'red', fontSize: fontSizes.h6, marginBottom: 10 }}>{errorPassword}</Text>
            </View>
            <View style={{ marginHorizontal: 15 }}>
                <Text style={{ color: colors.primary, fontSize: fontSizes.h5 }}>Retype Password</Text>
                <TextInput onChangeText={(text) => {
                    setErrorPassword(isValidPassword(text) == true ? '' : 'Password must be at least 3 characters')
                    setPassword(text)
                }}
                    placeholder="Re-Enter your password" placeholderTextColor={colors.placeholder} secureTextEntry={true} style={{ color: 'black', fontSize: fontSizes.h5, marginTop: -5 }}></TextInput>
                <View style={{ height: 1, backgroundColor: colors.primary, width: '100%', marginTop: -5 }}></View>
                <Text style={{ color: 'red', fontSize: fontSizes.h6, marginBottom: 10 }}>{errorPassword}</Text>
            </View>
            <TouchableOpacity
                disabled={!isValidtionOk() == false}
                onPress={() =>
                    // alert(`Email=${email}, password=${password}`)
                    goBack()
                }
                style={{ backgroundColor: isValidtionOk() == true ? colors.primary : colors.inactive, justifyContent: 'center', alignItems: 'center', width: '50%', alignSelf: 'center', borderRadius: 18 }}>
                <Text style={{ padding: 8, fontSize: fontSizes.h5, color: 'white' }}>Register</Text>
            </TouchableOpacity>
        </KeyboardAwareScrollView>
        {
            keyboardIsShown == false && <View style={{ flex: 0.4, marginTop: 15 }}>
                <View style={{ height: 40, flexDirection: 'row', alignItems: 'center', marginHorizontal: 15 }}>
                    <View style={{ backgroundColor: 'white', height: 1, flex: 1 }}></View>
                    <Text style={{ color: 'white', alignItems: 'center', padding: 8, marginHorizontal: 10 }}>User other methods?</Text>
                    <View style={{ backgroundColor: 'white', height: 1, flex: 1 }}></View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Icon style={{ backgroundColor: colors.facebook, padding: 4, width: 38, height: 38, borderRadius: 5 }}
                        name='facebook'
                        size={35}
                        color='white'
                    />
                    <View style={{ width: 30 }}></View>
                    <Icon
                        name='google'
                        size={35}
                        color={colors.google} />
                </View>
            </View>
        }

    </View >
}

export default Register