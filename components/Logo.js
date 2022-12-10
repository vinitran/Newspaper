import { StyleSheet, View, Text, Image } from 'react-native';
import React from 'react';


export default function Logo({ thumbnail, time, color = "black" }) {
    return (
        <View style={{ flexDirection: 'row', height: 45, justifyContent: 'flex-start', alignItems: 'center' }}>
            {/* <Image source={{ uri: thumbnail }}
                style={{
                    width: 40,
                    height: 30,
                    marginStart: 15,
                    marginEnd: 10,
                    marginTop: 25

                }}
            /> */}
            <Text style={{
                marginTop: 15,
                marginStart: 15,
                fontSize: 18,
                color
            }}>
                {time}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
});