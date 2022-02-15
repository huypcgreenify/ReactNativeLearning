/**
 * @format
 */

import React from "react"
import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import ReviseScreen from './screens/ReviseScreen'
import { Welcome, Login, Register } from './screens'


AppRegistry.registerComponent(appName, () => () => <Register />);

/*
let fakedProducts = [
    {
        productName: 'iphone 3',
        year: 2013
    },
    {
        productName: 'iphone 4',
        year: 2014
    },
    {
        productName: 'iphone 5',
        year: 2015
    },
]

AppRegistry.registerComponent(appName, () => () => <ReviseScreen
    x={1} y={2}
    person={{ name: 'Pham Huy', age: 20 }}
    products={fakedProducts}
/>);
*/
