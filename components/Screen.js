import { StyleSheet, ScrollView, Dimensions, View, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import React from 'react';

export default function Screen({ children, handleScroll }) {
    return (
        <ScrollView style={styles.container} scrollEventThrottle={16} onScroll={handleScroll}>
            {children}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        backgroundColor: '#f7f3f3',
    }
});