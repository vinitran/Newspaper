import { StyleSheet, View, Image } from 'react-native';
import React from 'react';
import Title from './Title';
import Logo from './Logo';

export default function TrendingCard({ item }) {
  const { imageUrl, logo, time, title } = item;

  return (
    <View style={styles.container}>

      <Image
        style={styles.image}
        source={{ uri: imageUrl }}
      />

      <View style={styles.discription}>
        <View style={styles.content}>
          <Title style={styles.content}>
            {title}
          </Title>
        </View>
        <Logo thumbnail={logo} time={time} />
      </View>
    </View>
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
  },
});