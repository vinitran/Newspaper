import { StyleSheet, View } from 'react-native';
import React from 'react';
import DetailCard from './DetailCard';

import { useNavigation } from '@react-navigation/native';


export default function DetailList({ data }) {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        {data.map((item) => <DetailCard item={item} key={item.id} />)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15
  }
});