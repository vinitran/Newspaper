import { FlatList, StyleSheet } from 'react-native';
import * as React from 'react';
import VideoItem from '../components/VideoItem';
import video from "../fakeDataVideo"
import { windowHeight } from '../constant';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

export default function VideoScreen() {
    const data = video;
    const [activeVideoIndex, setActiveVideoIndex] = React.useState(0)
    const bottomTabHeight = useBottomTabBarHeight();
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

