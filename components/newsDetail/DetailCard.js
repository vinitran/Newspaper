import { StyleSheet, Button, TouchableWithoutFeedback, Text, View, Image } from 'react-native';
import React from 'react';
import Title from '../Title';
import Logo from '../Logo';

export default function DetailCard({ item }) {
    const { imageUrl, logo, time, title, description } = item;
    const news = React.useRef(null);
    const [status, setStatus] = React.useState({});

    return (

        <View style={styles.container}>

            <View>
                <Text numberOfLines={3} style={styles.title}>{title}</Text>
            </View>

            <View >
                <Text style={styles.time}>
                    {time}
                </Text>
            </View>

            <View>
                <Text style={styles.subtitle}>{description[0]}</Text>
            </View>

            <View>
                <Text style={styles.description}>{description[1]}</Text>
            </View>

            <View style={styles.videos}>
                <Image
                    style={styles.video}
                    source={{ uri: imageUrl[0] }}
                />
            </View>

            <View>
                <Text style={styles.description}>{description[1]}</Text>
            </View>

            <View style={styles.button}>
                <Button
                    title="Listen"
                    color="white"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        overflow: 'hidden',
        backgroundColor: '#fff',
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    video: {
        width: '100%',
        height: 200,
        marginTop: 20,
        borderRadius: 8,
        marginBottom: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'black',
        marginTop: 10,
        marginBottom: 10,
        letterSpacing: 1,
    },
    time: {
        fontSize: 14,
        color: 'gray',
        marginTop: 10,
        marginBottom: 10,
    },
    subtitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
        marginTop: 10,
        marginBottom: 10,
        letterSpacing: 1,
        lineHeight: 30,
    },
    description: {
        fontSize: 14,
        color: 'black',
        marginTop: 10,
        marginBottom: 10,
        letterSpacing: 1,
        lineHeight: 30,
    },

    button: {
        backgroundColor: '#859a9b',
        borderRadius: 20,
        padding: 10,
        marginTop: 10,
        marginBottom: 20,
        shadowColor: '#303838',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.35,
    },
});