import { StyleSheet, TouchableWithoutFeedback, Text, View, Image } from 'react-native';
import React from 'react';
import Title from '../Title';
import Logo from '../Logo';

export default function TrendingCard({ item, onPress }) {
  const { imageUrl, time, title } = item;

  return (
    <TouchableWithoutFeedback onPress={onPress}>

      <View style={styles.container}>

        <Image
          style={styles.image}
          source={{ uri: imageUrl }}
        />

        <View style={styles.discription}>
          <View style={styles.content}>
            <Text numberOfLines={3} style={styles.content}>{title}</Text>
          </View>
          <Logo time={time} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 150,
    // overflow: 'hidden',

    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    width: '30%',
    height: 100,
    marginTop: 20,
    borderRadius: 8,
    marginLeft: 15,
  },
  discription: {
    width: '60%',
  },
  content: {
    paddingTop: 18,
    paddingBottom: 14,
    paddingHorizontal: 15,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    letterSpacing: 1,
  },
});