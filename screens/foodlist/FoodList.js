import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { images, colors, icons, fontSizes } from '../../constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import FoodItems from './FoodItems'

/**
 * - 2 Cách:
 - ListView from a map of objects
 - Flatlist
 */
const FoodList = (props) => {
    //List of foods = state
    const [foods, setFoods] = useState([
        {
            name: 'foodlist foodlist foodlistfoodlist foodlist foodlistfoodlistfoodlistfoodlistfoodlist',
            url: 'https://www.verywellfit.com/thmb/I3WlEIk4OptFwELCE34uYGttx6w=/1885x1414/smart/filters:no_upscale()/GettyImages-5381529421-58cc46ff5f9b581d721d15dd.jpg',
            status: 'Opening now',
            price: 5555.3,
            website: 'http://www.foodlist.com',
            socialNetwork: {
                facebook: 'http://www.facebook.com/foodlist',
                twitter: 'http://twitter.com/foodlist',
                instagram: 'http://instagram.com/foodlist',
            }
        },
        {
            name: 'foodlist1 foodlist',
            url: 'https://thepointsguy.co.uk/wp-content/uploads/2020/09/GettyImages-599272840.jpg',
            status: 'Closing soon',
            price: 2222.3,
            website: 'http://www.foodlist.com',
            socialNetwork: {
                facebook: 'http://www.facebook.com/foodlist',
            }
        },
        {
            name: 'foodlist2 foodlistfoodlistfoodlist',
            url: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Spaghettata.JPG',
            status: 'Opening now',
            price: 3333.3,
            website: 'http://www.foodlist.com',
            socialNetwork: {
                instagram: 'http://instagram.com/foodlist',
            }
        },
        {
            name: 'foodlistss3 foodlistss',
            url: 'https://thepointsguy.co.uk/wp-content/uploads/2020/09/GettyImages-599272840.jpg',
            status: 'Comming soon',
            price: 5544.3,
            website: 'http://www.foodlist.com',
            socialNetwork:
            {
                facebook: 'http://www.facebook.com/foodlist',
                twitter: 'http://twitter.com/foodlist',
            }
        },
        {
            name: 'foodlist3 foodlist',
            url: 'https://thepointsguy.co.uk/wp-content/uploads/2020/09/GettyImages-599272840.jpg',
            status: 'Closing soon',
            price: 5544.3,
            website: 'http://www.foodlist.com',
            socialNetwork: {
                facebook: 'http://www.facebook.com/foodlist',
                twitter: 'http://twitter.com/foodlist',
            }
        },
        {
            name: 'foodliddst3 foodlist',
            url: 'https://thepointsguy.co.uk/wp-content/uploads/2020/09/GettyImages-599272840.jpg',
            status: 'Closing soon',
            price: 5544.3,
            website: 'http://www.foodlist.com',
            socialNetwork: {
                facebook: 'http://www.facebook.com/foodlist',
                twitter: 'http://twitter.com/foodlist',
            }
        },
        {
            name: 'foodlisđt3 foodlist',
            url: 'https://thepointsguy.co.uk/wp-content/uploads/2020/09/GettyImages-599272840.jpg',
            status: 'Closing soon',
            price: 5544.3,
            website: 'http://www.foodlist.com',
            socialNetwork: {
                facebook: 'http://www.facebook.com/foodlist',
                twitter: 'http://twitter.com/foodlist',
            }
        },
        {
            name: 'foodliđst3 foodlist',
            url: 'https://thepointsguy.co.uk/wp-content/uploads/2020/09/GettyImages-599272840.jpg',
            status: 'Closing soon',
            price: 5544.3,
            website: 'http://www.foodlist.com',
            socialNetwork: {
                facebook: 'http://www.facebook.com/foodlist',
                twitter: 'http://twitter.com/foodlist',
            }
        }
    ])
    const [category, setCategory] = useState([
        {
            name: 'BBQ',
            url: 'https://chefjob.vn/wp-content/uploads/2020/02/dinh-nghia-bbq-la-gi.jpg'
        },
        {
            name: 'breakfast',
            url: 'https://iamafoodblog.b-cdn.net/wp-content/uploads/2019/02/full-english-7355w-2.jpg'
        },
        {
            name: 'coffee',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG'
        }
        ,
        {
            name: 'ALoo',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG'
        }
        ,
        {
            name: 'Heheh',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG'
        }
        ,
        {
            name: 'ddd',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG'
        }
        ,
        {
            name: 'ssssssss',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG'
        },
        {
            name: 'wwwe',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG'
        }
    ])
    const [searchText, setSearchText] = useState('')
    const filteredFoods = () => foods.filter(eachFood => eachFood.name.toLowerCase().includes(searchText.toLowerCase()))
    return <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View>
            <View style={{ height: 50, marginHorizontal: 10, alignItems: 'center', flexDirection: 'row', }}>
                <Icon name={'search'} size={15} color={'black'} style={{ position: 'absolute', top: 16, left: 10 }} />
                <TextInput
                    autoCorrect={false}
                    onChangeText={(text) =>
                        setSearchText(text)
                    }
                    style={{ height: 35, backgroundColor: colors.inactive, flex: 1, marginEnd: 8, borderRadius: 5, fontSize: fontSizes.h6, opacity: 0.5, color: 'white', paddingStart: 30 }} />
                <Icon name={'bars'} size={30} color={'black'} />
            </View>
            <View style={{ height: 100, }}>
                <View style={{ height: 1, backgroundColor: colors.inactive }} />
                <FlatList
                    style={{ flex: 1, }}
                    data={category}
                    keyExtractor={item => item.name}
                    horizontal={true}
                    renderItem={({ item }) => {
                        return <TouchableOpacity
                            onPress={() => { alert(`press ${item.name}`) }}
                            style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{
                                width: 40,
                                height: 40,
                                resizeMode: 'cover',
                                borderRadius: 25,
                                margin: 10
                            }}
                                source={{
                                    uri: item.url
                                }} />
                            <Text style={{ color: 'black', fontSize: fontSizes.h6 * 0.8 }}>{item.name}</Text>
                        </TouchableOpacity>
                    }}>
                </FlatList>
                <View style={{ height: 1, backgroundColor: colors.inactive }} />
            </View>
        </View>
          {/* <ScrollView>
                {foods.map(eachFood => <FoodItems food={eachFood} key={eachFood.name} />)}
            </ScrollView> */}
        {filteredFoods().length > 0 ? <FlatList
            data={filteredFoods()}
            renderItem={({ item }) => <FoodItems
                onPress={() => { alert('Press: ' + item.name) }}
                food={item} />}
            keyExtractor={eachFood => eachFood.name}
        /> : <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'black', fontSize: fontSizes.h3 }}>Not food found</Text>
        </View>}
    </View>
}

export default FoodList