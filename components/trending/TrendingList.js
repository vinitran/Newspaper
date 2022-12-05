import { Text, StyleSheet, View } from 'react-native';
import React from 'react';
import TrendingCard from './TrendingCard';

import { useNavigation } from '@react-navigation/native';


export default function TrendingList({ data, topic }) {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.topic}>
          <Text style={styles.textTopic}> $ {topic} </Text>
        </View>
        {data.map((item) => <TrendingCard onPress={() => navigation.navigate('NewsDetail')} item={item} key={item.id} />)}
        <Text style={styles.readmore}>Đọc thêm</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    backgroundColor: '#fff',
    paddingBottom: 15,
    marginBottom: 1,
  },

  readmore: {
    textAlign: 'center',
    fontWeight: 'bold',
  },

  topic: {
    paddingTop: 15,
    paddingHorizontal: 15,
  },

  textTopic: {
    color: '#008b8b'
  }

});