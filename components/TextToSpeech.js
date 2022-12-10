import React from 'react';
import { Text, Button, StyleSheet, View } from 'react-native';
import * as Speech from 'expo-speech'
import Touchable from 'react-native-platform-touchable'; // 1.1.1



export default class TextToSpeech extends React.Component {
    state = {
        text: '',
        inProgress: false,
        pitch: 0.8,
        rate: 1.2,
        isSpeaking: false,
        selectSentence: '',
        desText: this.props.description,
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.inProgress !== this.state.inProgress) {
            this.props.handleInProgress(this.state.inProgress);

        }
    }

    handleSpeechText = () => {
        if (!this.state.isSpeaking && !this.state.inProgress) {

            this.props.description.map((item, index) => {
                if (index < 2) {
                    this._speak(item, false, 'title')
                } else if (index === 2) { this._speak(item, false, 3, 0) }
                else if (item.length > 0) {
                    item.map((subItem, subIndex) => {
                        if (subIndex === item.length - 1 && index === this.props.description.length - 1) {
                            this._speak(subItem, true)
                        } else if (subIndex === item.length - 1) {
                            this._speak(subItem, false, index + 1, 0)
                        } else {
                            this._speak(subItem, false, index, subIndex + 1)
                        }
                    })
                }
            })
        } else if (!this.state.isSpeaking) {
            return this._resume()

        } else if (this.state.isSpeaking && this.state.inProgress) {
            return this._pause();
        }

    }
    render() {
        let { inProgress, isSpeaking } = this.state
        let { title, description, time } = this.props;
        return (
            <View style={styles.container}>
                <Button
                    //disabled={this.state.inProgress}
                    onPress={() => this.handleSpeechText()}
                    title={inProgress === false && isSpeaking === false ?
                        "Speak" : isSpeaking === false ? "Resume" : "Pause"
                    }
                />

                {inProgress && <Button
                    //disabled={!this.state.inProgress}
                    onPress={this._stop}
                    title={"Stop"}
                />}
            </View>

        );
    }

    _speak = (content, onDone, index, subIndex) => {
        const start = () => {
            this.setState({
                isSpeaking: true,
                inProgress: true
            });
        };
        const complete = () => {
            this.state.inProgress && this.setState({
                inProgress: false,
                isSpeaking: false,
            });
        };
        const paused = () => {
            this.state.inProgress && this.setState({
                isSpeaking: false,
            });
        }
        const resumed = () => {
            this.state.inProgress && this.setState({
                isSpeaking: true,
            });
        }
        if (!onDone) {
            Speech.speak(content, {
                language: 'vi-VN',
                pitch: this.state.pitch,
                rate: this.state.rate,
                onPause: paused,
                onResume: resumed,
                onDone: () => { this.props.speakSentenceIndex(index, subIndex) },
                onStart: start,
                onError: complete,
            })
        } else {
            Speech.speak(content, {
                language: 'vi-VN',
                pitch: this.state.pitch,
                rate: this.state.rate,
                onPause: paused,
                onResume: resumed,
                onDone: complete,
                onStart: start,
                onError: complete,
            }
            )
        }




    };
    _pause = () => {
        this.setState({ isSpeaking: false });
        Speech.pause()
    }

    _resume = () => {
        this.setState({ isSpeaking: true })
        Speech.resume()
    }
    _stop = () => {
        this.setState({
            isSpeaking: false,
            inProgress: false
        });
        Speech.stop();
    };

    // _renderExample = (example, i) => {
    //     let { selectedExample } = this.state;
    //     let isSelected = selectedExample === example;

    //     return (
    //         <Touchable
    //             key={i}
    //             hitSlop={{ top: 10, bottom: 10, left: 20, right: 20 }}
    //             onPress={() => this._selectExample(example)}>
    //             <Text
    //                 style={[
    //                     styles.exampleText,
    //                     isSelected && styles.selectedExampleText,
    //                 ]}>
    //                 {example.text} ({example.language})
    //             </Text>
    //         </Touchable>
    //     );
    // };

    // _selectExample = example => {
    //     this.setState({ selectedExample: example });
    // };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },

    separator: {
        height: 1,
        backgroundColor: '#eee',
        marginTop: 0,
        marginBottom: 15,
    },
    headerText: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5,
    },
    headerContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        marginHorizontal: 20,
        marginBottom: 0,
        marginTop: 20,
    },
    exampleText: {
        fontSize: 15,
        color: '#ccc',
        marginVertical: 10,
    },
    examplesContainer: {
        paddingTop: 15,
        paddingBottom: 10,
        paddingHorizontal: 20,
    },
    selectedExampleText: {
        color: 'black',
    },
    controlText: {
        fontSize: 16,
        fontWeight: '500',
        marginTop: 5,
        textAlign: 'center',
    },
    controlRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
}); 