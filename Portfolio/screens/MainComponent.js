import { View, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import Constants from 'expo-constants';
import EntryScreen from './EntryScreen';
import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen';
import NewsScreen from './NewsScreen';
import PortfolioScreen from './PortfolioScreen';

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
            <Tab.Navigator
                initialRouteName='Entry'
            >
                <Tab.Screen
                    name="Entry"
                    component={EntryNavigator}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Icon
                                name='home'
                                type='font-awesome'
                                size={30}
                                iconStyle={{ width: 30 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name="News"
                    component={NewsNavigator}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Icon
                                name='newspaper-o'
                                type='font-awesome'
                                size={30}
                                iconStyle={{ width: 35 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name="Portfolio"
                    component={PortfolioNavigator}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Icon
                                name='ghost'
                                type='font-awesome-5'
                                size={30}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name="About"
                    component={AboutNavigator}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Icon
                                name='info-circle'
                                type='font-awesome'
                                size={30}
                                iconStyle={{ width: 26 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name="Contact"
                    component={ContactNavigator}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Icon
                                name='address-card'
                                type='font-awesome'
                                size={30}
                                iconStyle={{ width: 35 }}
                                color={color}
                            />
                        )
                    }}
                />
            </Tab.Navigator>
        </View>
    )
}


export default Main;