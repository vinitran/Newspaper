import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import ProfileScreen from "./screens/profile";
import VideoScreen from "./screens/video";
import TrendingScreen from './screens/trending';
import NewsScreen from "./screens/news";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: styles.tabBar,
          tabBarShowLabel: true,
          tabBarActiveTintColor: "#2fa1b3",
          unmountOnBlur: true,
        })}
      >
        <Tab.Screen name="News" component={NewsScreen}
          options={{
            tabBarLabel: 'News',
            tabBarIcon: ({ color }) => (
              <FontAwesome name="newspaper-o" color={color} size={22} />
            ),
          }}
        />
        <Tab.Screen name="Video" component={VideoScreen}
          options={{
            tabBarLabel: 'Video',
            tabBarIcon: ({ color }) => (
              <Entypo name="video" color={color} size={25} />
            ),
          }}
        />
        <Tab.Screen name="Trending" component={TrendingScreen}
          options={{
            tabBarLabel: 'Trending',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="trending-up" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen name="Profile" component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    // height: 45,
    paddingHorizontal: 5,
    paddingTop: 0,
    position: 'absolute',
    borderTopWidth: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
})