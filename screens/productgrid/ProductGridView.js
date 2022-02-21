import React, { useState } from 'react';
import { View, FlatList } from 'react-native'
import GridItems from './GridItems';

const ProductGridView = (props) => {
    const [products, setProduct] = useState([
        {
            url: 'https://salt.tikicdn.com/ts/tmp/9f/aa/79/a05fb47dded0bad33344ba24e4698e31.jpg',
            price: 75,
            productName: 'Hehe hehe',
            specification: [
                'Dry clean',
                'Cyclone filter',
                'Convenient cord storage'
            ],
            review: 19,
            stars: 5
        },
        {
            url: 'https://cdn.mediamart.vn/images/product/may-hut-bi-roler-rc-2114_38a8aa3d.jpg',
            price: 99,
            productName: 'Hoho hoho',
            specification: [
                'HOHOHOHO',
                'ADUADUADU',
                'CCC',
                'OKOOKKOO'
            ],
            review: 221,
            stars: 4
        },
        {
            url: 'https://cdn.mediamart.vn/images/product/may-hut-bi-roler-rc-2114_38a8aa3d.jpg',
            price: 99,
            productName: 'Hohsos hoho',
            specification: [
                'HOHOHOHO',
                'ADUADUADU',
                'CCC'
            ],
            review: 34,
            stars: 3
        },
        {
            url: 'https://cdn.mediamart.vn/images/product/may-hut-bi-roler-rc-2114_38a8aa3d.jpg',
            price: 99,
            productName: 'Hohaao hoho',
            specification: [
                'HOHOHOHO',
                'ADUADUADU',
                'CCC'
            ],
            review: 34,
            stars: 3
        },
        {
            url: 'https://cdn.mediamart.vn/images/product/may-hut-bi-roler-rc-2114_38a8aa3d.jpg',
            price: 99,
            productName: 'dHoho hoho',
            specification: [
                'HOHOHOHO',
                'ADUADUADU',
                'CCC'
            ],
            review: 34,
            stars: 3
        },
        {
            url: 'https://cdn.mediamart.vn/images/product/may-hut-bi-roler-rc-2114_38a8aa3d.jpg',
            price: 99,
            productName: 'asHoho hoho',
            specification: [
                'HOHOHOHO',
                'CCC'
            ],
            review: 34,
            stars: 3
        },
        {
            url: 'https://cdn.mediamart.vn/images/product/may-hut-bi-roler-rc-2114_38a8aa3d.jpg',
            price: 99,
            productName: 'dđâHoho hoho',
            specification: [
                'HOHOHOHO',
                'ADUADUADU',
                'CCC'
            ],
            review: 34,
            stars: 3
        },
        {
            url: 'https://cdn.mediamart.vn/images/product/may-hut-bi-roler-rc-2114_38a8aa3d.jpg',
            price: 99,
            productName: 'Hoho hoho',
            specification: [
                'HOHOHOHO',
                'ADUADUADU',
                'CCC'
            ],
            review: 34,
            stars: 3
        },
        {
            url: 'https://cdn.mediamart.vn/images/product/may-hut-bi-roler-rc-2114_38a8aa3d.jpg',
            price: 99,
            productName: 'qqqHoho hoho',
            specification: [
                'HOHOHOHO',
                'ADUADUADU',
                'CCC'
            ],
            review: 23,
            stars: 5
        },
        {
            url: 'https://cdn.mediamart.vn/images/product/may-hut-bi-roler-rc-2114_38a8aa3d.jpg',
            price: 99,
            productName: 'eeeHoho hoho',
            specification: [
                'HOHOHOHO',
                'ADUADUADU',
                'CCC'
            ],
            review: 33,
            stars: 5
        },
        {
            url: 'https://cdn.mediamart.vn/images/product/may-hut-bi-roler-rc-2114_38a8aa3d.jpg',
            price: 99,
            productName: 'rrrHoho hoho',
            specification: [
                'HOHOHOHO',
                'ADUADUADU',
                'CCC'
            ],
            review: 66,
            stars: 6
        }
    ])
    // debugger
    return <View style={{ flex: 1, backgroundColor: 'white' }}>
        <FlatList
            style={{ marginTop: 5, }}
            keyExtractor={item => item.productName}
            data={products}
            numColumns={2}
            renderItem={({ item, index }) =>
                <GridItems
                    size={products.length - 1}
                    item={item}
                    index={index}
                    onPress={() => {
                        {
                            let clonedProduct = products.map(eachProduct => {
                                if (item.productName == eachProduct.productName) {// phần tử hiện tại bằng với phần tử bấm vào
                                    return {
                                        ...eachProduct,
                                        isSaved: eachProduct.isSaved == false
                                            || eachProduct.isSaved == undefined
                                            ? true : false
                                    }
                                }
                                return eachProduct
                            })
                            setProduct(clonedProduct)
                        }
                    }}
                />}
        />
    </View >
}

export default ProductGridView  