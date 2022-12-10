import { StyleSheet, Button, TouchableWithoutFeedback, Text, View, Image } from 'react-native';
import React, { useEffect } from 'react';
import Title from '../Title';
import Logo from '../Logo';
import TextToSpeech from './TextToSpeech';
import TextToSpeechFpt from '../TextToSpeechFpt';

const NO_WIDTH_SPACE = '​';
export default function DetailCard({ item }) {
    const { imageUrl, logo, time, title, description } = item;
    const news = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const [desAfterSplit, setDesAfterSplit] = React.useState([])
    const [sentenceIndex, setSentenceIndex] = React.useState('')
    const [sentenceSubIndex, setSentenceSubIndex] = React.useState('')
    const [newsType, setNewsType] = React.useState('')
    const [inListening, setInListening] = React.useState(false)
    useEffect(() => {
        handleSplitDescription(description)
    }, [description])

    useEffect(() => {
        //  if (sentenceSubIndex) { highlight(desAfterSplit[sentenceIndex][sentenceSubIndex]) }
    }, [sentenceIndex, sentenceSubIndex])
    let handleSplitDescription = (description) => {
        if (description) {
            let tmpDes = []
            tmpDes.push("Tiêu đề.", title, "Nội dung.")
            description.map((item, index) => {
                let subDes = item.split(".")
                subDes.pop(subDes.length - 1)
                tmpDes.push(subDes.map((subItem) => {
                    subItem += '.'
                    console.log(subItem)
                    return subItem
                }
                ))
            })
            setDesAfterSplit(tmpDes)
            console.log(tmpDes)
        }
    }
    let handleInProgress = (inProgress) => {
        setInListening(inProgress)
    }

    let getSentenceIndex = (index, subIndex) => {
        setSentenceIndex(index)
        setSentenceSubIndex(subIndex)
        console.log(index, subIndex)
    }

    // let checkHighlight = (des, indexArr) => {
    //     if (des && des.length > 0) {
    //         let desHighLighted = []
    //         des.map((item, index) => {
    //             console.log(item)
    //             if (index === sentenceSubIndex && indexArr === sentenceIndex) {
    //                 desHighLighted.push(highlight(item), '. ')
    //                 console.log('ok')
    //             }
    //             //desHighLighted.concat(item, '. ')
    //         })
    //         console.log(desHighLighted)
    //         return des
    //     }
    // }

    const highlight = string => {
        return (
            string.split('  ').map((word, i) => (
                <Text key={i}>
                    <Text style={styles.highlighted}>{word}</Text>
                    {NO_WIDTH_SPACE}
                </Text>
            )
            ));
    }

    return (

        <View style={styles.container}>
            <View>
                <Text numberOfLines={3} style={styles.title}>
                    {inListening && sentenceIndex === 'title' ? highlight(title) : title}
                </Text>
            </View>

            <View style={styles.speechToText}>
                <Text style={styles.time}>
                    {time}
                </Text>
                <View style={{ flex: 1 }}>
                    <TextToSpeech
                        speakSentenceIndex={getSentenceIndex}
                        description={desAfterSplit}
                        handleInProgress={handleInProgress}
                    />
                    {/* <TextToSpeechFpt
                        speakSentenceIndex={getSentenceIndex}
                        description={desAfterSplit}
                        handleInProgress={handleInProgress}
                    /> */}
                </View>

            </View>

            <View>
                <Text style={styles.subtitle}>
                    {
                        desAfterSplit[3] && desAfterSplit[3].length > 0 &&
                        desAfterSplit[3].map((arrItem, index) => {
                            if (inListening && sentenceIndex === 3 && index === sentenceSubIndex) {
                                return highlight(arrItem)
                            }
                            return arrItem
                        }
                        )}
                </Text>
            </View>

            <View>
                <Text style={styles.description}>
                    {
                        desAfterSplit[4] && desAfterSplit[4].length > 0 &&
                        desAfterSplit[4].map((arrItem, index) => {
                            if (inListening && sentenceIndex === 4 && index === sentenceSubIndex) {
                                return highlight(arrItem)
                            }
                            return arrItem
                        }
                        )}
                </Text>
            </View>

            <View style={styles.video}>
                <Image
                    style={styles.video}
                    source={{ uri: imageUrl[0] }}
                />
            </View>

            <View>
                <Text style={styles.description}>
                    {
                        desAfterSplit[5] && desAfterSplit[5].length > 0 &&
                        desAfterSplit[5].map((arrItem, index) => {
                            if (inListening && sentenceIndex === 5 && index === sentenceSubIndex) {
                                return highlight(arrItem)
                            }
                            return arrItem
                        }
                        )}
                </Text>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    speechToText: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    highlighted: {
        backgroundColor: 'yellow'
    },
    container: {
        width: '100%',
        overflow: 'hidden',
        backgroundColor: '#fff',
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    video: {
        width: '100%',
        height: 200,
        marginTop: 20,
        borderRadius: 8,
        marginBottom: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'black',
        marginTop: 10,
        marginBottom: 10,
        letterSpacing: 1,
    },
    time: {
        fontSize: 14,
        color: 'gray',
        marginTop: 10,
        marginBottom: 10,
        flex: 2,
    },
    subtitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
        marginTop: 10,
        marginBottom: 10,
        letterSpacing: 1,
        lineHeight: 30,
    },
    description: {
        fontSize: 14,
        color: 'black',
        marginTop: 10,
        marginBottom: 10,
        letterSpacing: 1,
        lineHeight: 30,
    },

    button: {
        backgroundColor: '#859a9b',
        borderRadius: 20,
        padding: 10,
        marginTop: 10,
        marginBottom: 20,
        shadowColor: '#303838',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.35,
    },
});