import { StyleSheet, View } from 'react-native';
import React from 'react';
import Screen from '../components/Screen';
import NewsContainer from '../components/news/NewsContainer';
import axios from 'axios';


export default function NewsScreen() {

    const [newsContainer, setNewsContainer] = React.useState([]);
    React.useEffect(() => {
        async function fetchNews() {
            try {
                const requestUrl = "https://c9b5-14-231-133-217.ap.ngrok.io/get/videos/list/from/1/to/7";
                const data = await axios.get(requestUrl)
                    .then(res => res.data)
                setNewsContainer(data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchNews()
    }, [])

    return (
        <Screen >
            <View style={styles.container}>
                {newsContainer !== null ?
                    <NewsContainer data={newsContainer} /> : null}
            </View>
        </Screen >
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 50,
    }
});

// expo-cli start --tunnel