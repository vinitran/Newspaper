import { StyleSheet, View, Text, Image } from 'react-native';
import React from 'react';


export default function Logo({ thumbnail, time }) {
    return (
        <View style={{ flexDirection: 'row', height: 50, justifyContent: 'flex-start', alignItems: 'center' }}>
            <Image source={{ uri: thumbnail }}
                style={{
                    width: 40,
                    height: 30,
                    marginStart: 15,
                    marginEnd: 10,
                    marginTop: 25

                }}
            />
            <Text style={{
                marginTop: 25

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