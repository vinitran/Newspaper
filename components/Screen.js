import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export default function Screen({ children, handleScroll, backgroundColor = "#f7f3f3", }) {
    return (
        <SafeAreaView style={{ flex: 0, backgroundColor }}>
            <ScrollView style={{ backgroundColor }} scrollEventThrottle={16} onScroll={handleScroll}>
                {children}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        backgroundColor: '#f7f3f3',
    }
});