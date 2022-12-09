import { StyleSheet, View } from 'react-native';
import React from 'react';
import NewsCard from './NewsCard';

import { useNavigation } from '@react-navigation/native';


export default function NewsList({ data }) {
  const navigation = useNavigation();
  return (
    <View>
      {data !== null ?
        <View style={styles.container}>
          {data.map((item) => <NewsCard onPress={() => navigation.navigate('NewsDetail', { itemId: item.id })} item={item} key={item.id} />)}
        </View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15
  }
});