import { StyleSheet, View } from 'react-native';
import React from 'react';
import VideoCard from './VideoCard';


export default function VerticalList({ data, focusedIndex }) {
    return (
        <View>
            <View style={styles.container}>
                {data.map((item, index) => <VideoCard item={item} key={item.id} index={index} focusedIndex={focusedIndex} />)}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 15
    }
});