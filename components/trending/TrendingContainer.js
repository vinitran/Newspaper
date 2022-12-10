import { StyleSheet, View } from 'react-native';
import React from 'react';
import TrendingList from './TrendingList';

export default function TrendingContainer({ data }) {

  const topic = ['ĐANG ĐƯỢC QUAN TÂM', 'NÓNG 24H', 'GÓC NHÌN VÀ PHÂN TÍCH'];

  return <TrendingList data={data} topic={topic} />
}
