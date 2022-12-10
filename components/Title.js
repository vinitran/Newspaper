
import { Text } from 'react-native';
import React from 'react';


export default function Title({ children, color = "black" }) {

    return (
        <Text numberOfLines={3} style={{ fontWeight: 'bold', fontSize: 24, color: color }}>{children}</Text>
    );
}

