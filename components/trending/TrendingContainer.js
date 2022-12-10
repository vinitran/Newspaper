import { StyleSheet, View } from 'react-native';
import React from 'react';
import TrendingList from './TrendingList';

export default function TrendingContainer({ data, topic }) {

  return <TrendingList data={data} topic={topic} />
}
