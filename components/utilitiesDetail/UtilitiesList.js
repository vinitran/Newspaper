import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import UtilitiesCard from './UtilitiesCard';

import { useNavigation } from '@react-navigation/native';


export default function UtilitiesList({ data }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.textTitle}>Tiện ích</Text>
      </View>
      <View>
        {data.map((item) => <UtilitiesCard item={item} key={item.id} />)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  textTitle: {
    paddingHorizontal: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    paddingBottom: 10,
  }
});
