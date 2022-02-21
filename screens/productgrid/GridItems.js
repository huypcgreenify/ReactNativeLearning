import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { images, colors, icons, fontSizes } from '../../constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import FiveStars from './FiveStars';

const fixFlexItemGridView = (indexFix, sizeFix) => {
    if (indexFix % 2 == 0 && sizeFix == indexFix) {
        return 0.485
    }
    return 0.5
}

const GridItems = (props) => {
    // debugger
    const { item, index, onPress, size } = props

    return <View style={{
        flex: fixFlexItemGridView(index, size),
        // backgroundColor: index % 2 == 0 ? 'green' : 'red',
        marginLeft: index % 2 == 0 ? 10 : 0,
        marginTop: 5,
        marginRight: 10,
        marginBottom: 5,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: colors.inactive
    }}>
        <View style={{ flexDirection: 'row', padding: 10 }}>
            <Image
                style={{
                    width: "60%",
                    height: 100,
                    resizeMode: 'cover',
                    borderRadius: 20,
                }}
                source={{ uri: item.url }} />
            <Text style={{
                color: 'black',
                fontSize: fontSizes.h1,
                flex: 1,
                textAlign: 'right',
            }}>$ {item.price}</Text>
        </View>
        <Text
            style={{
                color: 'blue',
                fontSize: fontSizes.h3,
                marginHorizontal: 10,
                marginTop: 5,
            }}>{item.productName}</Text>
        {
            item.specification.map(specification =>
                <Text
                    key={specification}
                    style={{
                        color: 'black',
                        fontSize: fontSizes.h5,
                        paddingHorizontal: 10,
                        paddingBottom: 5
                    }}>* {specification}</Text>
            )}
        <View style={{
            flexDirection: 'row',
            padding: 5,
            // alignItems: 'center',
        }}>
            <TouchableOpacity
                onPress={onPress}
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Icon style={{ marginEnd: 5 }}
                    name={'heart'}
                    size={22}
                    color={item.isSaved == undefined || item.isSaved == false ? colors.inactive : 'red'} />
                <Text style={{
                    color: item.isSaved == undefined || item.isSaved == false ? colors.inactive : 'red',
                    fontSize: fontSizes.h5 * 0.9,
                    width: '50%',
                    marginLeft: 2
                }}>Saved for later</Text>
            </TouchableOpacity>
            <View style={{ flex: 1, width: '50%', justifyContent: 'center' }}>
                <FiveStars numberOfStars={item.stars} />
                <Text style={{
                    color: 'blue',
                    fontSize: fontSizes.h5 * 0.5,
                    textAlign: 'right',
                }}>{item.review} reviews</Text>
            </View>
        </View>
    </View>
}

export default GridItems