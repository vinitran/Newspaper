import { StyleSheet, Button, Text, View, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

export default function DetailContainer({ data }) {
    const { time, title, description } = data;

    return (
        <View style={styles.container}>

            <View>
                <Text numberOfLines={3} style={styles.title}>{title}</Text>
            </View>

            <View >
                <Text style={styles.time}>
                    {time}
                </Text>
                <Icon.Button
                    name="sound"
                    backgroundColor="white"
                    color="black"
                >
                    Speak
                </Icon.Button>

            </View>
            {description !== undefined ?
                <View>
                    {description.map((item) =>
                        <View>
                            {item['description'] !== null &&
                                <Text style={styles.description}>{item['description']}</Text>}

                            {item['imageUrl'] !== null &&
                                <Image
                                    style={styles.image}
                                    source={{ uri: item['imageUrl'] }}
                                />}
                        </View>
                    )}
                </View>
                : null}

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
        paddingTop: 10,
        paddingHorizontal: 20,
    },
    image: {
        width: '100%',
        height: 200,
        marginTop: 30,
        borderRadius: 8,
        marginBottom: 30,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 32,
        color: 'black',
        marginTop: 10,
        marginBottom: 10,
        letterSpacing: 1,
    },
    time: {
        fontSize: 18,
        color: 'gray',
        marginTop: 10,
        marginBottom: 10,
    },
    subtitle: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'black',
        marginTop: 10,
        marginBottom: 10,
        letterSpacing: 1,
        lineHeight: 30,
    },
    description: {
        fontSize: 18,
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