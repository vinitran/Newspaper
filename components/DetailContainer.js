
import { StyleSheet, Button, TouchableWithoutFeedback, Text, View, Image } from 'react-native';
import React, { useEffect } from 'react';
import Title from './Title';
import Logo from './Logo';
import TextToSpeech from './TextToSpeech';
import TextToSpeechFpt from './TextToSpeechFpt';

const NO_WIDTH_SPACE = '​';
export default function DetailContainer({ data }) {
    const { time, title, description } = data;

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
                let subDesImg = item.imageUrl
                if (item.description) {
                    let subDesText = item.description.split(".")
                    subDesText.pop(subDesText.length - 1)
                    tmpDes.push({
                        text: subDesText.map((subItem) => {
                            subItem += '.'
                            return subItem
                        }
                        ),
                        imageUrl: subDesImg
                    })
                } else {
                    tmpDes.push({
                        text: "",
                        imageUrl: subDesImg
                    })
                }
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
            </View >

            {
                description !== undefined ?
                    <View>
                        {desAfterSplit.map((item, index) =>
                            <View>
                               {index > 2 && item.text &&
                                        <Text style={styles.description}>
                                            {
                                                item.text !== "" && item.text.length > 0 &&
                                                item.text.map((arrItem, subIndex) => {
                                                    if (inListening && subIndex === sentenceSubIndex && index === sentenceIndex) {
                                                        return highlight(arrItem)
                                                    }
                                                    return arrItem
                                                })
                                            }
                                        </Text>
                                    }
                                    {index > 2 && item.imageUrl &&
                                        <Image
                                            style={styles.image}
                                            source={{ uri: item.imageUrl }}
                                        />}
                            </View>
                        )}
                    </View>
                    : null}

        </View >
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
        paddingTop: 10,
        paddingHorizontal: 20,
    },
    image: {
        width: '100%',
        height: 200,
        marginTop: 30,
        borderRadius: 8,
        marginBottom: 30,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 32,
        color: 'black',
        marginTop: 10,
        marginBottom: 10,
        letterSpacing: 1,
    },
    time: {
        fontSize: 18,
        color: 'gray',
        marginTop: 10,
        marginBottom: 10,
        flex: 2,
    },
    subtitle: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'black',
        marginTop: 10,
        marginBottom: 10,
        letterSpacing: 1,
        lineHeight: 30,
    },
    description: {
        fontSize: 18,
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
