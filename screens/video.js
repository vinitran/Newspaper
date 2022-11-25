import { StyleSheet } from 'react-native';
import React from 'react';
import Screen from '../components/Screen';
import data from "../fakeDataVideo"
import VideoNews from '../components/VideoNews';

const ITEM_HEIGHT = 350;
export default function VideoScreen() {
    const [focusedIndex, setFocusedIndex] = React.useState(0);

    const videoNews = data;
    const handleScroll = React.useCallback((e) => {
        const offset = Math.round(e.nativeEvent.contentOffset.y / ITEM_HEIGHT);
        setFocusedIndex(offset)
    }, [setFocusedIndex]);
    return (
        <Screen handleScroll={handleScroll} >
            <VideoNews data={videoNews} focusedIndex={focusedIndex} />
        </Screen >
    );
}

const styles = StyleSheet.create({
    container: {
    }
});