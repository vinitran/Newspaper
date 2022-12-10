import { StyleSheet, View } from 'react-native';
import React from 'react';
import UtilitiesCard from './UtilitiesCard';

import { useNavigation } from '@react-navigation/native';


export default function UtilitiesList({ data }) {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        {data.map((item) => <UtilitiesCard onPress={() => navigation.navigate('UtilitiesDetail')} item={item} key={item.id} />)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  }
});