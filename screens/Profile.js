/** đồ thị:
 yarn add react-native-chart-kit
 yarn add react-native-svg
 */
import React, { useState, useEffect } from 'react';
import { View, Text, Image, Dimensions } from 'react-native'
import { images, colors, icons, fontSizes } from '../constants'
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    user as UserRepository,
    population as PopulationRepository
} from '../repositories'
import { convertDateTimeToString } from '../utilies/DateTime';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart,
} from "react-native-chart-kit"

//Đồ thị
const screenWidth = Dimensions.get("window").width * 0.9;
const screenHeight = Dimensions.get("window").height;
const Profile = (props) => {
    const [user, setUser] = useState({})
    const [populations, setPopulations] = useState({})

    // call when component loaded => componentDidMount
    useEffect(() => {
        UserRepository.getUserDetail()
            .then(responseUser => setUser(responseUser))
            .catch()

        PopulationRepository.getPopulation({
            drilldowns: 'Nation',
            measures: 'Population'
        })
            .then(responsePopulations => setPopulations(responsePopulations))
    }, [])
    UserRepository.getUserDetail()

    const { dateOfBirth, email, gender, userId, address, username, url, phone, registeredDate } = user

    const chartConfig = {
        backgroundGradientFrom: 'white',
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "white",
        backgroundGradientToOpacity: 1.0,
        color: (opacity) => colors.primary,
        strokeWidth: 3, // optional, default 3
        barPercentage: 0.15,
        useShadowColorFromDataset: false // optional
    }

    // const data = {
    //     labels:  populations.sort((a, b) => parseInt(a.year) - parseInt(b.year))// sắp xếp tăng dần của năm
    //         .map(item => item.year), // optional
    //     data: populations
    //         .map(item => Math.floor(item.population / 1000_000, 0)),
    // }
    return <SafeAreaView style={{
        flex: 1,
        paddingStart: 20,
        paddingTop: 50,

    }}>
        <Image style={{
            width: 100,
            height: 100,
            borderRadius: 80,
            marginBottom: 20,
            alignSelf: 'center',
        }}
            source={{ uri: url }}></Image>
        {/*---------------*/}
        <View style={{
            flexDirection: 'row',
        }}>
            <Text style={{
                fontWeight: 'bold',
                fontSize: fontSizes.h5
            }}>Username: </Text>
            <Text>{username}</Text>
        </View>
        {/*---------------*/}
        <View style={{
            flexDirection: 'row',
        }}>
            <Text style={{
                fontWeight: 'bold',
                fontSize: fontSizes.h5
            }}>Email: </Text>
            <Text>{email}</Text>
        </View>
        {/*---------------*/}
        <View style={{
            flexDirection: 'row',
        }}>
            <Text style={{
                fontWeight: 'bold',
                fontSize: fontSizes.h5
            }}>Date Of Birth: </Text>
            <Text>{convertDateTimeToString(dateOfBirth)}</Text>
        </View>
        {/*---------------*/}
        <View style={{
            flexDirection: 'row',
        }}>
            <Text style={{
                fontWeight: 'bold',
                fontSize: fontSizes.h5
            }}>Gender: </Text>
            <Text>{gender}</Text>
        </View>
        {/*---------------*/}
        <View style={{
            flexDirection: 'row',
        }}>
            <Text style={{
                fontWeight: 'bold',
                fontSize: fontSizes.h5
            }}>Address: </Text>
            <Text>{address}</Text>
        </View>
        {/*---------------*/}
        <View style={{
            flexDirection: 'row',
        }}>
            <Text style={{
                fontWeight: 'bold',
                fontSize: fontSizes.h5
            }}>Phone: </Text>
            <Text>{phone}</Text>
        </View>
        {/*---------------*/}
        <View>
            {/* <Text>{JSON.stringify(populations)}</Text> */}
            <BarChart
                // style={graphStyle}
                data={{
                    labels: populations.sort((a, b) => parseInt(a.year) - parseInt(b.year))// sắp xếp tăng dần của năm
                        .map(item => item.year),
                    datasets: [
                        {
                            data: populations
                                .map(item => Math.floor(item.population / 1000_000, 0)),
                        }
                    ],
                }}
                width={screenWidth}
                height={220}
                yAxisLabel=''
                chartConfig={chartConfig}
                verticalLabelRotation={25}
            />
            {/* <PieChart
                data={{
                    labels: populations.sort((a, b) => parseInt(a.year) - parseInt(b.year))// sắp xếp tăng dần của năm
                        .map(item => item.year),
                    datasets: [
                        {
                            data: populations
                                .map(item => Math.floor(item.population / 1000_000, 0)),
                        }
                    ],
                }}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"15"}
                center={[10, 50]}
                absolute
            /> */}

            {/* <ProgressChart
                data={{
                    labels: populations.sort((a, b) => parseInt(a.year) - parseInt(b.year))// sắp xếp tăng dần của năm
                        .map(item => item.year), // optional
                    data: populations
                        .map(item => Math.floor(item.population / 1000_000, 0)),
                }}
                width={screenWidth}
                height={220}
                strokeWidth={16}
                radius={32}
                chartConfig={chartConfig}
                hideLegend={false}
            /> */}
            {/* <StackedBarChart
                // style={graphStyle}
                data={{
                    labels: populations.sort((a, b) => parseInt(a.year) - parseInt(b.year))// sắp xếp tăng dần của năm
                        .map(item => item.year), // optional
                    data: populations
                        .map(item => Math.floor(item.population / 1000_000, 0)),
                }}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
            /> */}
        </View>
    </SafeAreaView>
}

export default Profile