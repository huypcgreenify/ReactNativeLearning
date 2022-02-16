import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard, ScrollView } from 'react-native'
import { images, colors, icons, fontSizes } from '../../constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import FoodItems from './FoodItems'

/**
 * - 2 Cách:
 - ListView from a map of objects
 - Flatlist
 */
const FoodList = (props) => {
     let { food } = props// destructuring an object

    //List of foods = state
    const [foods, setFoods] = useState([
        {
            name: 'foodlist foodlist foodlistfoodlist foodlist foodlistfoodlistfoodlistfoodlistfoodlist',
            url: 'https://www.verywellfit.com/thmb/I3WlEIk4OptFwELCE34uYGttx6w=/1885x1414/smart/filters:no_upscale()/GettyImages-5381529421-58cc46ff5f9b581d721d15dd.jpg',
            status: 'Opening soon',
            price: 5555.3,
            website: 'http://www.foodlist.com',
            socialNetwork: [
                {
                    facebook: 'http://www.facebook.com/foodlist',
                    twitter: 'http://twitter.com/foodlist',
                    instagram: 'http://instagram.com/foodlist',
                }
            ]
        },
        {
            name: 'foodlist1 foodlist',
            url: 'https://thepointsguy.co.uk/wp-content/uploads/2020/09/GettyImages-599272840.jpg',
            status: 'Closing soon',
            price: 2222.3,
            website: 'http://www.foodlist.com',
            socialNetwork: [
                {
                    facebook: 'http://www.facebook.com/foodlist',
                }
            ]
        },
        {
            name: 'foodlist2 foodlistfoodlistfoodlist',
            url: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Spaghettata.JPG',
            status: 'Opening soon',
            price: 3333.3,
            website: 'http://www.foodlist.com',
            socialNetwork: [
                {
                    instagram: 'http://instagram.com/foodlist',
                }
            ]
        },
        {
            name: 'foodlist3 foodlist',
            url: 'https://thepointsguy.co.uk/wp-content/uploads/2020/09/GettyImages-599272840.jpg',
            status: 'Closing soon',
            price: 5544.3,
            website: 'http://www.foodlist.com',
            socialNetwork: [
                {
                    facebook: 'http://www.facebook.com/foodlist',
                    twitter: 'http://twitter.com/foodlist',
                }
            ]
        },
        {
            name: 'foodlist3 foodlist',
            url: 'https://thepointsguy.co.uk/wp-content/uploads/2020/09/GettyImages-599272840.jpg',
            status: 'Closing soon',
            price: 5544.3,
            website: 'http://www.foodlist.com',
            socialNetwork: [
                {
                    facebook: 'http://www.facebook.com/foodlist',
                    twitter: 'http://twitter.com/foodlist',
                }
            ]
        },
        {
            name: 'foodlist3 foodlist',
            url: 'https://thepointsguy.co.uk/wp-content/uploads/2020/09/GettyImages-599272840.jpg',
            status: 'Closing soon',
            price: 5544.3,
            website: 'http://www.foodlist.com',
            socialNetwork: [
                {
                    facebook: 'http://www.facebook.com/foodlist',
                    twitter: 'http://twitter.com/foodlist',
                }
            ]
        },
        {
            name: 'foodlist3 foodlist',
            url: 'https://thepointsguy.co.uk/wp-content/uploads/2020/09/GettyImages-599272840.jpg',
            status: 'Closing soon',
            price: 5544.3,
            website: 'http://www.foodlist.com',
            socialNetwork: [
                {
                    facebook: 'http://www.facebook.com/foodlist',
                    twitter: 'http://twitter.com/foodlist',
                }
            ]
        },
        {
            name: 'foodlist3 foodlist',
            url: 'https://thepointsguy.co.uk/wp-content/uploads/2020/09/GettyImages-599272840.jpg',
            status: 'Closing soon',
            price: 5544.3,
            website: 'http://www.foodlist.com',
            socialNetwork: [
                {
                    facebook: 'http://www.facebook.com/foodlist',
                    twitter: 'http://twitter.com/foodlist',
                }
            ]
        }
    ])
    return <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View>
            <ScrollView>
                {foods.map(eachFood => {
                    debugger
                    return <FoodItems food={eachFood} />
                })}
            </ScrollView>
        </View>
    </View>
} 

export default FoodList