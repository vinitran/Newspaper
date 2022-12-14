import { StyleSheet, TouchableWithoutFeedback, View, Image } from 'react-native';
import React from 'react';
import Title from '../Title';
import Logo from '../Logo';

export default function NewsCard({ item, onPress }) {
    const { imageUrl, time, title } = item;
    const news = React.useRef(null);
    const [status, setStatus] = React.useState({});

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>

                <View style={styles.videos}>
                    <Image
                        style={styles.video}
                        source={{ uri: imageUrl }}
                    />
                </View>

                <Logo time={time} />
                <View style={styles.content}>
                    <Title style={styles.content}>
                        {title}
                    </Title>
                </View>

            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 350,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#fff',
        marginBottom: 10
    },
    video: {
        width: '100%',
        height: 200,
        marginTop: 20,
        borderRadius: 8
    },
    content: {
        paddingTop: 5,
        paddingHorizontal: 15,
    },
    videos: {
        paddingHorizontal: 15,
    }
});