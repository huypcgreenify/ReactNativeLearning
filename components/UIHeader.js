import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { colors, fontSizes } from '../constants'


const UIHeader = (props) => {
    const { title,
        leftIconName,
        rightIconName,
        onPressLeftIcon,
        onPressRightIcon
    } = props //truyền dữ liệu từ màn này sang màn khác

    return <View style={{
        height: 50,
        backgroundColor: colors.primary,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    }}>
        {leftIconName != undefined ? <Icon
            onPress={onPressLeftIcon}
            style={{ padding: 10 }}
            name={leftIconName}
            size={23}
            color={'white'}></Icon> :
            <View style={{
                width: 50,
                height: 50,
                backgroundColor: 'white',
            }}></View>}

        <Text style={{
            fontSize: fontSizes.h3,
            alignSelf: 'center',
        }}>{title}</Text>

        {rightIconName != undefined ? <Icon
            onPress={onPressRightIcon}
            style={{ padding: 10 }}
            name={rightIconName}
            size={23}
            color={'white'}></Icon> :
            <View style={{
                width: 50,
                height: 50,
                backgroundColor: 'white',
            }}></View>}
    </View>
}

export default UIHeader