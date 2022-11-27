import { StyleSheet, View } from 'react-native';
import React from 'react';
import NewsCard from './NewsCard';


export default function NewsList({ data }) {
  return (
    <View>
      <View style={styles.container}>
        {data.map((item) => <NewsCard item={item} key={item.id} />)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15
  }
});