import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, ScrollView, Switch } from 'react-native'
import { images, colors, icons, fontSizes } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { UIHeader } from '../components';


const Settings = (props) => {
    const [isEnabledLockApp, setEnabledLockApp] = useState(true);
    const [isUseFingerprint, setUseFingerprint] = useState(false);
    const [isEnabledChangePassword, setEnabledChangePassword] = useState(false);

    return <View style={{
        flex: 1,
        backgroundColor: 'white'
    }}>
        <UIHeader style={{}} title={'Settings'} />
        <ScrollView>
            <View style={{
                height: 40,
                backgroundColor: 'rgba(0,0,0,0.05)',
                justifyContent: 'center',
            }}>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h5,
                    paddingStart: 10,
                }}>Common</Text>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 10, alignItems: 'center' }} >
                <Icon style={{
                    marginStart: 10
                }}
                    name='globe'
                    size={20}></Icon>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h5,
                    paddingStart: 10,
                }}>Language</Text>
                <View style={{ flex: 1 }}></View>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h5,
                    paddingStart: 10,
                    paddingEnd: 10,
                    opacity: 0.5
                }}>English</Text>
                <Icon style={{ paddingEnd: 10, }}
                    name='chevron-right'
                    size={15}></Icon>
            </View>
            {/**Enviment */}
            <View style={{ flexDirection: 'row', marginVertical: 10, alignItems: 'center' }} >
                <Icon style={{
                    marginStart: 10
                }}
                    name='cloud'
                    size={16}></Icon>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h5,
                    paddingStart: 10,
                }}>Environment</Text>
                <View style={{ flex: 1 }}></View>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h5,
                    paddingStart: 10,
                    paddingEnd: 10,
                    opacity: 0.5
                }}> Production</Text>
                <Icon style={{ paddingEnd: 10, }}
                    name='chevron-right'
                    size={15}></Icon>
            </View>
            {/**Account*/}
            <View style={{
                height: 40,
                backgroundColor: 'rgba(0,0,0,0.05)',
                justifyContent: 'center',
            }}>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h5,
                    paddingStart: 10,
                }}>Account</Text>
            </View>
            {/** ------------ */}
            <View style={{ flexDirection: 'row', marginVertical: 10, alignItems: 'center' }} >
                <Icon style={{
                    marginStart: 10
                }}
                    name='phone'
                    size={16}></Icon>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h5,
                    paddingStart: 10,
                }}>Phone number</Text>
                <View style={{ flex: 1 }}></View>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h5,
                    paddingStart: 10,
                    paddingEnd: 10,
                    opacity: 0.5
                }}></Text>
                <Icon style={{ paddingEnd: 10, }}
                    name='chevron-right'
                    size={15}></Icon>
            </View>
            {/** ------------ */}
            <View style={{ flexDirection: 'row', marginVertical: 10, alignItems: 'center' }} >
                <Icon style={{
                    marginStart: 10
                }}
                    name='envelope'
                    size={17}></Icon>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h5,
                    paddingStart: 10,
                }}>Email</Text>
                <View style={{ flex: 1 }}></View>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h5,
                    paddingStart: 10,
                    paddingEnd: 10,
                    opacity: 0.5
                }}></Text>
                <Icon style={{ paddingEnd: 10, }}
                    name='chevron-right'
                    size={15}></Icon>
            </View>
            {/** ------------ */}
            <View style={{ flexDirection: 'row', marginVertical: 10, alignItems: 'center' }} >
                <Icon style={{
                    marginStart: 10
                }}
                    name='sign-out-alt'
                    size={17}></Icon>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h5,
                    paddingStart: 10,
                }}>Sign out</Text>
                <View style={{ flex: 1 }}></View>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h5,
                    paddingStart: 10,
                    paddingEnd: 10,
                    opacity: 0.5
                }}></Text>
                <Icon style={{ paddingEnd: 10, }}
                    name='chevron-right'
                    size={15}></Icon>
            </View>
            {/**Security*/}
            <View style={{
                height: 40,
                backgroundColor: 'rgba(0,0,0,0.05)',
                justifyContent: 'center',
            }}>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h5,
                    paddingStart: 10,
                }}>Security</Text>
            </View>
            {/** ------------ */}
            <View style={{ flexDirection: 'row', marginVertical: 10, alignItems: 'center' }} >
                <Icon style={{
                    marginStart: 10
                }}
                    name='door-closed'
                    size={15}></Icon>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h5,
                    paddingStart: 7,
                }}>Lock app in background</Text>
                <View style={{ flex: 1 }}></View>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h5,
                    paddingStart: 10,
                    paddingEnd: 10,
                    opacity: 0.5
                }}></Text>
                <Switch
                    style={{ marginEnd: 5 }}
                    trackColor={{ false: "#767577", true: colors.primary }}
                    thumbColor={isEnabledLockApp ? 'white' : "#f4f3f4"}
                    // ios_backgroundColor="#3e3e3e"
                    onValueChange={() => {
                        setEnabledLockApp(!isEnabledLockApp)//Đổi từ true thành false
                    }}
                    value={isEnabledLockApp}
                />
            </View>
            {/** ------------ */}
            <View style={{ flexDirection: 'row', marginVertical: 10, alignItems: 'center' }} >
                <Icon style={{
                    marginStart: 10
                }}
                    name='fingerprint'
                    size={17}></Icon>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h5,
                    paddingStart: 10,
                }}>Use fingerprint</Text>
                <View style={{ flex: 1 }}></View>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h5,
                    paddingStart: 10,
                    paddingEnd: 10,
                    opacity: 0.5
                }}></Text>
                <Switch
                    style={{ marginEnd: 5 }}
                    trackColor={{ false: "#767577", true: colors.primary }}
                    thumbColor={isUseFingerprint ? 'white' : "#f4f3f4"}
                    // ios_backgroundColor="#3e3e3e"
                    onValueChange={() => {
                        setUseFingerprint(!isUseFingerprint)//Đổi từ true thành false
                    }}
                    value={isUseFingerprint}
                />
            </View>
            {/** ------------ */}
            <View style={{ flexDirection: 'row', marginVertical: 10, alignItems: 'center' }} >
                <Icon style={{
                    marginStart: 10
                }}
                    name='lock'
                    size={17}></Icon>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h5,
                    paddingStart: 10,
                }}>Change password</Text>
                <View style={{ flex: 1 }}></View>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h5,
                    paddingStart: 10,
                    paddingEnd: 10,
                    opacity: 0.5
                }}></Text>
                <Switch
                    style={{ marginEnd: 5 }}
                    trackColor={{ false: "#767577", true: colors.primary }}
                    thumbColor={isEnabledChangePassword ? 'white' : "#f4f3f4"}
                    // ios_backgroundColor="#3e3e3e"
                    onValueChange={() => {
                        setEnabledChangePassword(!isEnabledChangePassword)//Đổi từ true thành false
                    }}
                    value={isEnabledChangePassword}
                />
            </View>
            {/**Misc*/}
            <View style={{
                height: 40,
                backgroundColor: 'rgba(0,0,0,0.05)',
                justifyContent: 'center',
            }}>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h5,
                    paddingStart: 10,
                }}>Misc</Text>
            </View>
            {/** ------------ */}
            <View style={{ flexDirection: 'row', marginVertical: 10, alignItems: 'center' }} >
                <Icon style={{
                    marginStart: 10
                }}
                    name='file-alt'
                    size={20}></Icon>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h5,
                    paddingStart: 10,
                }}>Term of Service</Text>
                <View style={{ flex: 1 }}></View>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h5,
                    paddingStart: 10,
                    paddingEnd: 10,
                    opacity: 0.5
                }}></Text>
                <Icon style={{ paddingEnd: 10, }}
                    name='chevron-right'
                    size={15}></Icon>
            </View>
            {/** ------------ */}
            <View style={{ flexDirection: 'row', marginVertical: 10, alignItems: 'center' }} >
                <Icon style={{
                    marginStart: 10
                }}
                    name='passport'
                    size={20}></Icon>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h5,
                    paddingStart: 10,
                }}>Open source license</Text>
                <View style={{ flex: 1 }}></View>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h5,
                    paddingStart: 10,
                    paddingEnd: 10,
                    opacity: 0.5
                }}></Text>
                <Icon style={{ paddingEnd: 10, }}
                    name='chevron-right'
                    size={15}></Icon>
            </View>
        </ScrollView >
    </View >
}

export default Settings