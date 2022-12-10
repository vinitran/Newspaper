import { Text, View, Button, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import axios from 'axios';
import { Audio } from 'expo-av';
const config = {
    headers: {
        "api-key": "XQbk0C0RRS6RkaZTc6ejqrgMRszfCEfE",
        'voice': 'banmai',
        'speed': '',
    }
};
const url = "https://api.fpt.ai/hmi/tts/v5";
export default function TextToSpeechFpt() {
    const [audioURL, setAudioURL] = useState();
    const [textData, setTextData] = useState();
    const [Loaded, SetLoaded] = useState(false);
    const [Loading, SetLoading] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);
    const [duration, setDuration] = useState(null);
    const [position, setPosition] = useState(null);
    const [finish, setFinish] = useState(true);
    const [inProgress, setInProgress] = useState(false);
    const sound = React.useRef(new Audio.Sound());

    useEffect(() => {
        let handleGetResponse = async () => {
            if (textData) {
                let data = textData.data;
                const res = await axios.post(url, data, config)
                setAudioURL(res.data.async)
            }
        }
        handleGetResponse()
    }, [textData])
    useEffect(() => {
        LoadAudio();
        return () => Unload();
    }, [audioURL]);


    const onPlaybackStatusUpdate = (status) => {
        setIsPlaying(status.isPlaying);
        setDuration(status.durationMillis);
        setPosition(status.positionMillis);
        setFinish(status.didJustFinish);
        console.log(status);
    }

    const PlayAudio = async () => {
        try {

            const result = await sound.current.getStatusAsync();
            if (result.isLoaded) {
                if (result.isPlaying === false) {
                    if (finish) {
                        this.props.speakSentenceIndex(textData.index, textData.subIndex)
                        // sound.current.replayAsync()
                    } else {
                        sound.current.playAsync();
                    }
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleSpeech = async () => {
        try {
            const result = await sound.current.getStatusAsync();
            if (result.isLoaded) {
                if (result.isPlaying === false) {
                    this.props.description.map((item, index) => {
                        if (index < 2) {
                            setTextData({ data: item, index: 'title' })
                        } else if (index === 2) { setTextData({ data: item, index: 3, subIndex: 0 }) }
                        else if (item.length > 0) {
                            item.map((subItem, subIndex) => {
                                if (subIndex === item.length - 1 && index === this.props.description.length - 1) {
                                    setTextData({ data: item })
                                } else if (subIndex === item.length - 1) {
                                    setTextData({ data: subItem, index: index + 1, subIndex: 0 })
                                } else {
                                    setTextData({ data: item, index: index, subIndex: subIndex + 1 })
                                }
                            })
                        }
                    })
                    if (finish) {
                        sound.current.replayAsync()
                    } else {
                        sound.current.playAsync();
                    }
                    //sound.current.replayAsync();
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    const PauseAudio = async () => {
        try {
            const result = await sound.current.getStatusAsync();
            if (result.isLoaded) {
                if (result.isPlaying === true) {
                    sound.current.pauseAsync();
                }
            }
        } catch (error) { }
    };

    const LoadAudio = async () => {
        SetLoading(true);
        const checkLoading = await sound.current.getStatusAsync();
        if (checkLoading.isLoaded === false && audioURL) {
            try {
                const result = await sound.current.loadAsync({ uri: audioURL }, {}, onPlaybackStatusUpdate);
                sound.current.setStatusAsync({ isLooping: finish })
                if (result.isLoaded === false) {
                    SetLoading(false);
                    console.log('Error in Loading Audio');
                } else {
                    SetLoading(false);
                    PlayAudio()
                    SetLoaded(true);
                }
            } catch (error) {
                console.log(error);
                SetLoading(false);
            }
        } else {
            SetLoading(false);
        }
    };

    const Unload = async () => {
        await sound.current.unloadAsync();
    };
    return (
        <View style={styles.container}>
            <Button
                onPress={handleSpeech}
                title={"Speak"}
            />
            <Button
                onPress={PauseAudio}
                title={"Stop"}
            />
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#859a9b',
        borderRadius: 20,
        padding: 10,
        marginTop: 10,
        marginBottom: 20,
        shadowColor: '#303838',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.35,
        flexDirection: 'row',
    },
});