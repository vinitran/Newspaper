import { StyleSheet, Text, View, Image, Animated, Easing, StatusBar } from 'react-native';
import * as React from 'react';
import { Video } from 'expo-av';
import { windowHeight, windowWidth } from "../constant"
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

export default function VideoItem({ data, isActive }) {
    const video = React.useRef(null)
    const { uri, caption, channelName, musicName, likes, avatarUri } = data

    const discAnimatedValue = React.useRef(new Animated.Value(0)).current;
    const discAnimation = {
        transform: [{
            rotate: discAnimatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: ["0deg", '360deg']
            })
        }]
    }

    React.useEffect(() => {
        Animated.loop(
            Animated.timing(discAnimatedValue, {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear,
                useNativeDriver: false,
            })
        ).start();
    }, [discAnimatedValue])

    const bottomTabHeight = useBottomTabBarHeight()
    const statusBarHeight = StatusBar.currentHeight || 0;
    return (
        <View style={[styles.container, { height: windowHeight }]}>
            <Video
                ref={video}
                style={styles.video}
                source={{ uri: uri }}
                resizeMode="cover"
                shouldPlay={isActive}
            />
            <View style={styles.bottomSection}>
                <View style={styles.bottomLeftSection}>
                    <Text style={styles.channelName}>{channelName}</Text>
                    <Text style={styles.caption}>{caption}</Text>
                    <View style={styles.musicNameContainer}>
                        <Image
                            source={require("../assets/images/music-note.png")}
                            style={styles.musicNameIcon}
                        />
                        <Text style={styles.musicName}>{musicName}</Text>
                    </View>
                </View>
                <View style={styles.bottomRightSection}>
                    <Animated.Image
                        source={require("../assets/images/disc.png")}
                        style={[styles.musicDisc, discAnimation]}
                    />
                </View>
            </View>
            <View style={styles.verticalBar}>
                <View style={[styles.verticalBarItem, styles.avatarContainer]}>
                    <Image style={styles.avatar} source={{ uri: avatarUri }} />
                    <View style={styles.followButton}>
                        <Image source={require("../assets/images/plus-button.png")}
                            style={styles.followIcon} />
                    </View>
                </View>
                <View style={styles.verticalBarItem}>
                    <Image style={styles.verticalBarIcon} source={require("../assets/images/heart.png")} />
                    <Text style={styles.verticalBarText}>{likes}</Text>
                </View>

                <View style={styles.verticalBarItem}>
                    <Image style={styles.verticalBarIcon} source={require("../assets/images/reply.png")} />
                    <Text style={styles.verticalBarText}>Share</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
    },
    video: {
        position: 'absolute',
        width: "100%",
        height: "100%"
    },
    bottomSection: {
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 8,
        paddingBottom: 90
    },
    bottomLeftSection: {
        flex: 4,
    },
    bottomRightSection: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    channelName: {
        color: "white",
        fontWeight: "bold"
    },
    caption: {
        color: "white",
        marginVertical: 8
    },
    musicNameContainer: {
        color: "white",
        flexDirection: "row",
        alignItems: "center"
    },
    musicNameIcon: {
        width: 12,
        height: 12,
        marginRight: 8
    },
    musicName: {
        color: "white"
    },
    musicDisc: {
        width: 40,
        height: 40
    },
    verticalBar: {
        position: "absolute",
        right: 8,
        bottom: 72,
        paddingBottom: 90
    },
    verticalBarItem: {
        marginBottom: 24,
        alignItems: "center"
    },
    verticalBarIcon: {
        width: 32,
        height: 32
    },
    verticalBarText: {
        color: "white",
        marginTop: 4
    },
    avatarContainer: {
        marginBottom: 48,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },
    followButton: {
        position: "absolute",
        bottom: -8,
        width: 16,
        height: 16
    },
    followIcon: {
        width: 21,
        height: 21
    }
});

