import { StyleSheet, View } from 'react-native';
import React from 'react';
import Screen from '../components/Screen';
import TrendingContainer from '../components/trending/TrendingContainer';
import axios from 'axios';


export default function TrendingScreen() {

    const topic = ['ĐANG ĐƯỢC QUAN TÂM', 'NÓNG 24H', 'GÓC NHÌN VÀ PHÂN TÍCH'];

    const [data1, setData1] = React.useState([]);
    const [data2, setData2] = React.useState([]);
    const [data3, setData3] = React.useState([]);
    React.useEffect(() => {
        async function fetchTrending() {
            try {
                const requestUrl = "https://b915-42-114-89-183.ap.ngrok.io/get/videos/list/from/8/to/16";
                const data = await axios.get(requestUrl)
                    .then(res => res.data)
                setData1([data[0], data[1], data[2]])
                setData2([data[3], data[4], data[5]])
                setData3([data[6], data[7], data[8]])
            } catch (error) {
                console.log(error);
            }
        }
        fetchTrending()
    }, [])


    return (
        <Screen >
            <View style={styles.container}>
                <TrendingContainer data={data1} topic={topic[0]} />
                <TrendingContainer data={data2} topic={topic[1]} />
                <TrendingContainer data={data3} topic={topic[2]} />
            </View>
        </Screen >
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 50,
    }
});