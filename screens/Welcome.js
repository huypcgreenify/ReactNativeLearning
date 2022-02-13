import React from "react"
import { Text, View, Image, ImageBackground, TouchableOpacity } from "react-native"
import { images, icons } from '../constants/index'

const Welcome = (props) => {
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
                    <Text style={{ color: 'white', }}>HUYPCCOMPANY.CO</Text>
                    <View style={{ flex: 1 }}></View>
                    <Image source={icons.iconQuestion}
                        style={{
                            width: 20, height: 20, tintColor: 'white', marginEnd: 10
                        }} />
                </View>
            </View>
            <View style={{
                flex: 0.2,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Text style={{ marginBottom: 7, color: 'white', fontSize: 12 }}>Welcome to</Text>
                <Text style={{ marginBottom: 7, color: 'white', fontWeight: 'bold', fontSize: 13 }}>HUYPCCOMPANY.CO!</Text>
                <Text style={{ marginBottom: 7, color: 'white', fontSize: 12 }}>Please select your account type</Text>
            </View>
            <View style={{ flex: 0.4, backgroundColor: 'green', }}>
                <TouchableOpacity style={{ borderColor: 'white', borderWidth: 1, height: 45, borderRadius: 5, marginHorizontal: 15, marginVertical: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}>
                    <Text style={{ color: '#FFB430' }}>Influence</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 0.2, backgroundColor: 'purple' }}>

            </View>
        </ImageBackground>

    </View>
}

export default Welcome