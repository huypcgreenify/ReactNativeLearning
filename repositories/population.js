/*
API = Application Programming Interface
Example: 
https://datausa.io/api/data?drilldowns=Nation&measures=Population
- yarn add axios
*/
import axios from 'axios'

const SERVER_NAME = 'datausa.io'
const getPopulation = async ({ drilldowns, measures }) => {
    const urlGetPopulation = `https://${SERVER_NAME}/api/data?drilldowns=${drilldowns}&measures=${measures}`
    try {
        let results = []
        let responseData = await axios.get(urlGetPopulation)
        responseData.data.data.forEach(item => {
            let myObject = {}
            myObject.nationId = item['ID Nation']
            myObject.year = item['Year']
            myObject.population = item['Population']
            results.push(myObject)
        })
        // debugger
        return results
    } catch (error) {
        throw error
    }
}
//many other functions

export default {
    getPopulation,
}