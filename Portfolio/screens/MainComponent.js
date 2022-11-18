import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import Constants from 'expo-constants';
import EntryScreen from './EntryScreen';
import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen';
import NewsScreen from './NewsScreen';
import PortfolioScreen from './PortfolioScreen';
import { Platform } from 'react-native';

const Tab = createBottomTabNavigator();

const screenOptions = {
    headerTintColor: '#E1E1E1',
    headerStyle: { backgroundColor: '#000000' }
}

const EntryNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Entry'
                component={EntryScreen}
                options={() => ({
                    title: 'Entry'
                })}
            />
        </Stack.Navigator>
    )
}

const AboutNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='About'
                component={AboutScreen}
                options={() => ({
                    title: 'About Me'
                })}
            />
        </Stack.Navigator>
    )
}

const ContactNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Contact'
                component={ContactScreen}
                options={() => ({
                    title: 'Contact Me'
                })}
            />
        </Stack.Navigator>
    )
}

const NewsNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='News'
                component={NewsScreen}
                options={() => ({
                    title: 'News'
                })}
            />
        </Stack.Navigator>
    )
}

const PortfolioNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Portfolio'
                component={PortfolioScreen}
                options={() => ({
                    title: 'Portfolio'
                })}
            />
        </Stack.Navigator>
    )
}

const Main = () => {
    return (
        <View
            style={{
                flex: 1,
                paddingTop:
                    Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}
        >
            <Tab.Navigator>
                <Tab.Screen
                    name="Entry"
                    component={EntryNavigator}
                />
                <Tab.Screen
                    name="News"
                    component={NewsNavigator}
                />
                <Tab.Screen
                    name="Portfolio"
                    component={PortfolioNavigator}
                />
                <Tab.Screen
                    name="About"
                    component={AboutNavigator}
                />
                <Tab.Screen
                    name="Contact"
                    component={ContactNavigator}
                />
            </Tab.Navigator>
        </View>
    )
}


export default Main;