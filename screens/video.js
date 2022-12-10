import { FlatList, StyleSheet } from 'react-native';
import * as React from 'react';
import VideoItem from '../components/VideoItem';
import video from "../fakeDataVideo"
import { windowHeight } from '../constant';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import axios from 'axios';
export default function VideoScreen() {

    const [activeVideoIndex, setActiveVideoIndex] = React.useState(0)
    const bottomTabHeight = useBottomTabBarHeight();
    const [videos, setVideos] = React.useState([]);
    const data = videos;
    React.useEffect(() => {
        async function fetchDetail() {
            try {
                const requestUrl = "https://c9b5-14-231-133-217.ap.ngrok.io/get/videos/list/";
                const data = await axios.get(requestUrl)
                    .then(res => res.data)
                setVideos(data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchDetail()
    }, [])
    return (
        <FlatList
            data={data}
            pagingEnabled
            renderItem={({ item, index }) => <VideoItem data={item} isActive={activeVideoIndex === index} />}
            onScroll={e => {
                const index = Math.round(e.nativeEvent.contentOffset.y / (windowHeight - bottomTabHeight))
                setActiveVideoIndex(index)
            }}
        />



    );
}

const styles = StyleSheet.create({
});

