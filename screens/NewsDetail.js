import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import Screen from '../components/Screen';
import DetailContainer from '../components/DetailContainer';
import axios from 'axios';

export default function NewsDetail({ route }) {
  console.log(route)
  const id = JSON.stringify(route.params.itemId)
  const [detailContainer, setDetailContainer] = React.useState([]);
  React.useEffect(() => {
    async function fetchDetail() {
      try {
        const requestUrl = "https://c9b5-14-231-133-217.ap.ngrok.io/get/newsDetail/" + id;
        const data = await axios.get(requestUrl)
          .then(res => res.data)
        setDetailContainer(data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchDetail()
  }, [])

  return (
    <Screen >
      <View style={styles.container}>
        {detailContainer !== null ?
          <DetailContainer data={detailContainer} /> : null}
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