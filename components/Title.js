
import { StyleSheet, View, Text } from 'react-native';
import React from 'react';


export default function TitleOfVideoScreen({ children, fontWeight = 'bold', fontSize = "18" }) {

    return (
        <Text numberOfLines={3} style={{ fontWeight, fontSize }}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    container: {

    },
});