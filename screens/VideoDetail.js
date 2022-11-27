import { StyleSheet } from 'react-native';
import * as React from 'react';
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
        <Screen handleScroll={handleScroll} backgroundColor="black">
            <VideoNews data={videoNews} focusedIndex={focusedIndex} color="pink" style={{ backgroundColor: "black" }} />
        </Screen >
    );
}

const styles = StyleSheet.create({
});

