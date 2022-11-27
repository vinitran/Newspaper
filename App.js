import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import video from "./screens/video"
import VideoDetail from "./screens/VideoDetail"

import VideoNavigator from './navigation/VideoNavigator';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={VideoNavigator} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="video" component={video} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="VideoDetail" component={VideoDetail} options={{
          headerBackTitleVisible: false, headerTransparent: true, title: ""

        }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#859a9b',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
})
