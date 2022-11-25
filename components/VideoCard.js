import { StyleSheet, View, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Video } from 'expo-av';
import React from 'react';
import Title from './Title';
import Logo from './Logo';

export default function VideoCard({ item, focusedIndex, index }) {
    const { uriVideo, thumbnail, time, title } = item;
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    return (
        <View style={styles.container}>
            <View style={styles.videos}>
                <Video
                    ref={video}
                    style={styles.video}
                    source={{ uri: uriVideo }}
                    useNativeControls
                    resizeMode="contain"
                    isLooping
                    onPlaybackStatusUpdate={setStatus}
                    shouldPlay={focusedIndex === index}

                />
            </View>
            <Logo thumbnail={thumbnail} time={time} />
            <View style={styles.content}>
                <Title style={styles.content}>
                    {title}
                </Title>
            </View>

        </View>
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
        paddingTop: 15,
        paddingHorizontal: 15,
    },
    videos: {
        paddingHorizontal: 15,
    }
});