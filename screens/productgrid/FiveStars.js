import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { images, colors, icons, fontSizes } from '../../constants'
import Icon from 'react-native-vector-icons/FontAwesome'

const FiveStars = (props) => {
    const { numberOfStars } = props
    return <View style={{ flexDirection: 'row', justifyContent: "flex-end" }}>
        {[0, 1, 2, 3, 4].map(item =>
            <Icon
                style={{ marginEnd: 2 }}
                key={`${item}`}
                name={'star'}
                size={8}
                color={item <= numberOfStars - 1 ? colors.warning : colors.inactive}
            />)}
    </View>
}

export default FiveStars