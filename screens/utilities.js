import { StyleSheet, View } from 'react-native';
import React from 'react';
import Screen from '../components/Screen';
import data from "../fakeDataUtilities"
import UtilitiesContainer from '../components/utilitiesDetail/UtilitiesContainer';

export default function UtilitiesScreen() {
    const newsData = data;
    return (
        <Screen >
            <View style={styles.container}>
                <UtilitiesContainer data={newsData} />
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