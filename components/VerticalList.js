import { StyleSheet, View } from 'react-native';
import React from 'react';
import VideoCard from './VideoCard';

import { useNavigation } from '@react-navigation/native';

export default function VerticalList({ data, focusedIndex, color, style }) {
    const navigation = useNavigation();
    return (
        <View>
            <View style={styles.container}>
                {data.map((item, index) => <VideoCard onPress={() => navigation.navigate('VideoDetail')} item={item} key={item.id} index={index} focusedIndex={focusedIndex} color={color} style={style} />)}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 15
    }
});