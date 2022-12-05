import { StyleSheet, View } from 'react-native';
import React from 'react';
import NewsCard from './NewsCard';

import { useNavigation } from '@react-navigation/native';


export default function NewsList({ data }) {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        {data.map((item) => <NewsCard onPress={() => navigation.navigate('NewsDetail')} item={item} key={item.id} />)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15
  }
});