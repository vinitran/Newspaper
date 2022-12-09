import { StyleSheet } from 'react-native';
import * as React from 'react';
import Screen from '../components/Screen';
import VideoNews from '../components/VideoNews';
import axios from 'axios';


const ITEM_HEIGHT = 350;
export default function VideoScreen() {
    const [focusedIndex, setFocusedIndex] = React.useState(0);

    const [videoNews, setVideoNews] = React.useState([]);
    React.useEffect(() => {
        async function fetchVideos() {
            try {
                const requestUrl = "";
                const data = await axios.get(requestUrl)
                    .then(res => res.data)
                setVideoNews(data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchVideos()
    }, [])
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
});

