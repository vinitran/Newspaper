import { StyleSheet, View } from 'react-native';
import React from 'react';
import Screen from '../components/Screen';
import TrendingContainer from '../components/trending/TrendingContainer';
import axios from 'axios';


export default function TrendingScreen() {

    const [trendingContainer, setTrendingContainer] = React.useState([]);
    React.useEffect(() => {
        async function fetchTrending() {
            try {
                const requestUrl = "https://d647-42-114-89-183.ap.ngrok.io/get/videos/list/from/8/to/16";
                const data = await axios.get(requestUrl)
                    .then(res => res.data)
                setTrendingContainer(data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchTrending()
    }, [])

    console.log(trendingContainer)

    return (
        <Screen >
            <View style={styles.container}>
                {trendingContainer !== null ?
                    <TrendingContainer data={trendingContainer} /> : null}
            </View>
        </Screen >
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 50,
    }
});