import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import UtilitiesScreen from "../screens/utilities";
import VideoScreen from "../screens/video";
import TrendingScreen from '../screens/trending';
import NewsScreen from "../screens/news";

const Tab = createBottomTabNavigator();

export default function VideoNavigator() {
    return (
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
            <Tab.Screen name="Utilities" component={UtilitiesScreen}
                options={{
                    tabBarLabel: 'Utilities',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="view-grid-outline" color={color} size={24} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        paddingHorizontal: 5,
        paddingTop: 0,
        position: 'absolute',
        borderTopWidth: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
})