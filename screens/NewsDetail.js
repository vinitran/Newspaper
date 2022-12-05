import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import Screen from '../components/Screen';
import data from "../fakeDataNewsDetail"
import DetailContainer from '../components/newsDetail/DetailContainer';

export default function NewsDetail() {
  const detailData = data;
  return (
    <Screen >
      <View style={styles.container}>
        <DetailContainer data={detailData} />
      </View>
    </Screen >
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
  }
});

// expo-cli start --tunnel