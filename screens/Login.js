import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard } from 'react-native'
import { images, colors, icons, fontSizes } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import { isValidEmail, isValidPassword } from '../utilies/Validations'

const Login = (props) => {
    const [keyboardIsShown, setKeyboardIsShown] = useState(false)
    //state for validating
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    //state to store email/password => lưu lại email và pass
    const [email, setEmail] = useState('huypc@gmail.com')
    const [password, setPassword] = useState('123456789')
    const isValidtionOk = () => email.length > 0
        && password.length > 0
        && isValidEmail(email) == true
        && isValidPassword(password) == true

    useEffect(() => {
        //componentDidMount
        Keyboard.addListener('keyboardDidShow', () => { setKeyboardIsShown(true) })

        Keyboard.addListener('keyboardDidHide', () => { setKeyboardIsShown(false) })
    })

    //navigation
    const { navigation, route } = props
    //function of navigation to/back
    const { navigate, goBack } = navigation

    return <KeyboardAvoidingView style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 0.35, height: 200, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
            <Text style={{ color: 'black', fontSize: fontSizes.h1, fontWeight: 'bold', width: '30%' }}>Already have an Account?</Text>
            <Image style={{ width: 160, height: 100, alignItems: 'center' }} source={images.computer}></Image>
        </View>
        <View style={{ flex: 0.25 }}>
            <View style={{ marginHorizontal: 15 }}>
                <Text style={{ color: colors.primary, fontSize: fontSizes.h5 }}>Email:</Text>
                <TextInput
                    value={email}
                    onChangeText={(text) => {
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
                <TextInput
                    value={password}
                    onChangeText={(text) => {
                        setErrorPassword(isValidPassword(text) == true ? '' : 'Password must be at least 3 characters')
                        setPassword(text)
                    }}
                    placeholder="Enter your password" placeholderTextColor={colors.placeholder} secureTextEntry={true} style={{ color: 'black', fontSize: fontSizes.h5, marginTop: -5 }}></TextInput>
                <View style={{ height: 1, backgroundColor: colors.primary, width: '100%', marginTop: -5 }}></View>
                <Text style={{ color: 'red', fontSize: fontSizes.h6, marginBottom: 10 }}>{errorPassword}</Text>
            </View>
        </View>
        {
            keyboardIsShown == false && <View style={{ flex: 0.15, marginTop: 45 }}>
                <TouchableOpacity
                    disabled={!isValidtionOk() == true}
                    onPress={() =>
                        //  alert(`Email=${email}, password=${password}`)
                        navigate('UITabView')
                    }
                    style={{ backgroundColor: isValidtionOk() == true ? colors.primary : colors.inactive, justifyContent: 'center', alignItems: 'center', width: '50%', alignSelf: 'center', borderRadius: 18 }}>
                    <Text style={{ padding: 8, fontSize: fontSizes.h5 }}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { navigate('Register') }}
                    style={{ padding: 5 }}>
                    <Text style={{ padding: 8, fontSize: fontSizes.h5, color: colors.primary, alignSelf: 'center' }}>New user? Register now</Text>
                </TouchableOpacity>
            </View>
        }
        {
            keyboardIsShown == false && <View style={{ flex: 0.25 }}>
                <View style={{ height: 40, flexDirection: 'row', alignItems: 'center', marginHorizontal: 15 }}>
                    <View style={{ backgroundColor: 'black', height: 1, flex: 1 }}></View>
                    <Text style={{ color: 'black', alignItems: 'center', padding: 8, marginHorizontal: 10 }}>User other methods?</Text>
                    <View style={{ backgroundColor: 'black', height: 1, flex: 1 }}></View>
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

    </KeyboardAvoidingView >
}

export default Login