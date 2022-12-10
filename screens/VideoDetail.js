import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';
import * as React from 'react';
import VideoItem from '../components/VideoItem';
import video from "../fakeDataVideo"
import { windowHeight } from '../constant';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
export default function VideoDetail() {
    const data = video;
    const [activeVideoIndex, setActiveVideoIndex] = React.useState(0)
    const insets = useSafeAreaInsets();
    return (
        <FlatList
            data={data}
            pagingEnabled
            renderItem={({ item, index }) => <VideoItem data={item} isActive={activeVideoIndex === index} />}
            onScroll={e => {
                const index = Math.round(e.nativeEvent.contentOffset.y / (windowHeight - insets.bottom - 60))
                setActiveVideoIndex(index)
            }}
        />
    );
}

const styles = StyleSheet.create({
});

