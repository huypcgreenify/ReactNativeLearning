import React from "react"
import { Text, View } from "react-native"

//component = function
//create a new variable which reference to a function
import { sum2Number, substract2Number, PI } from '../utilies/Calculation'
//read object, variable, function from other modules ==> utilies
const ReviseScreen = (props) => {
    //destructuring an object
    const { x, y } = props
    const { person } = props
    //destructuring person object
    const { name, age } = person
    const { products } = props
    //JSX
    //const => let => var
    return <View style={{ backgroundColor: 'red' }}>
        <Text>Value of x: {x}, Value of y: {y}</Text>
        <Text>Name is: {name}, age: {age}</Text>
        {products.map(eachProduct =>
            <Text>{eachProduct.productName}, {eachProduct.year}</Text>)}
        <Text>Sum 2 and 3 = {sum2Number(2, 3)}</Text>
        <Text>Substract 10 and 8 = {substract2Number(10, 8)}</Text>
        <Text>Number PI = {PI}</Text>
    </View>
}

export default ReviseScreen

/* 
function MainScreen(props) {
    return <Text>This is the main screen</Text>
}
*/
