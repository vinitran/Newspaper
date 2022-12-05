import { StyleSheet, View } from 'react-native';
import React from 'react';
import Screen from '../components/Screen';
import data1 from "../fakeDataTrending1"
import data2 from "../fakeDataTrending2"
import data3 from "../fakeDataTrending3"

import TrendingContainer from '../components/trending/TrendingContainer';

export default function TrendingScreen() {
    var myloop = [];
    const trendingData = [data1, data2, data3];
    const topic = ['ĐANG ĐƯỢC QUAN TÂM', 'NÓNG 24H', 'GÓC NHÌN VÀ PHÂN TÍCH'];

    for (let i = 0; i < 3; i++) {
        myloop.push(
            <TrendingContainer data={trendingData[i]} topic={topic[i]} />
        );
    }

    return (
        <Screen >
            <View style={styles.container}>
                {myloop}
            </View>
        </Screen >
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 50,
    }
});