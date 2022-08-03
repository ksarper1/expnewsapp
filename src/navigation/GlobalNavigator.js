import { Text, View } from 'react-native'
import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../pages/Home';
import NewsDetail from '../pages/NewsDetail';
import Settings from '../pages/Settings';
import Profile from '../pages/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons'

const RootStack = createNativeStackNavigator();
const TabbarStack = createBottomTabNavigator();
export class GlobalNavigator extends Component {
    bottomFunc = () => {
        return <TabbarStack.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused
                        ? 'home'
                        : 'home-outline';
                }
                else if (route.name === 'NewsDetail') {
                    iconName = focused ? 'ios-newspaper' : 'ios-newspaper-outline';
                }
                else if (route.name === 'Settings') {
                    iconName = focused ? 'settings' : 'settings-outline';
                }
                else if (route.name === 'Profile') {
                    iconName = focused ? 'person' : 'person-outline';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} style={{}} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
            tabBarStyle: {
                borderTopWidth: 0
            }
        })}>
            <TabbarStack.Screen
                name='Home'
                component={Home}
                options={{
                    headerMode: 'none',
                    headerTitle: null,
                    headerTransparent: true
                }}
            />
            <TabbarStack.Screen
                name='Settings'
                component={Settings}
                options={{
                    headerMode: 'none',
                    headerTitle: null,
                    headerTransparent: true
                }}
            />
            <TabbarStack.Screen
                name='Profile'
                component={Profile}
                options={{
                    headerMode: 'none',
                    headerTitle: null,
                    headerTransparent: true
                }}
            />
        </TabbarStack.Navigator>
    }
    render() {
        return (
            <RootStack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <RootStack.Screen
                    name='Root'
                    component={this.bottomFunc}
                    options={{
                        headerMode: 'none',
                        headerTitle: null,
                        headerTransparent: true
                    }}
                />
                <RootStack.Screen
                    name='NewsDetail'
                    component={NewsDetail}
                    options={{
                        headerMode: 'none',
                        headerTitle: null,
                        headerTransparent: true
                    }}
                />
            </RootStack.Navigator>
        )
    }
}

export default GlobalNavigator