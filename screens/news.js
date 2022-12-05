import { StyleSheet, View } from 'react-native';
import React from 'react';
import Screen from '../components/Screen';
import data from "../fakeDataNews"
import NewsContainer from '../components/news/NewsContainer';

export default function NewsScreen() {
    const newsData = data;
    return (
        <Screen >
            <View style={styles.container}>
                <NewsContainer data={newsData} />
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