import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBar } from '../components/TabBar/index';
import Quiz from '../screens/Tabs/Quiz';
import Feed from '../screens/Tabs/Feed';
import Groups from '../screens/Tabs/Groups';
import Home from '../screens/Tabs/Home';
import Colors from '../constants/Colors/Colors';

const Tab = createBottomTabNavigator();

export const TabsNavigator = () => {

    const getTabBarVisible = (route) => {
        const routeName = route.state
            ? route.state.routes[route.state.index].name
            : route.params?.screen || 'Home';

        if (routeName === 'AddEditPurchaseOrder') {
            return false;
        }
        return true;
    }

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    // You can return any component that you like here!
                    return <TabBar route={route.name} focused={focused} />;
                },
                tabBarVisible: getTabBarVisible(route)
            })}
            tabBarOptions={{
                activeTintColor: Colors.white,
                inactiveTintColor: Colors.tabInactiveColor,
                style: {
                    paddingBottom: 20,
                    paddingTop: 0,
                    backgroundColor: Colors.tabBackgroundColor,
                    height: 70
                }
            }}
            initialRouteName={"Home"}>
            <Tab.Screen name={"Home"} component={Home} />
            <Tab.Screen name={"Quiz"} component={Quiz} />
            <Tab.Screen name={"Feed"} component={Quiz} />
            <Tab.Screen name={"Groups"} component={Groups} />
        </Tab.Navigator>
    );
};
