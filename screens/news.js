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
                const requestUrl = "https://9130-42-114-89-183.ap.ngrok.io/get/news/list";
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