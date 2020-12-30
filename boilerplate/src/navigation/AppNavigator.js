import React, { useEffect, useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { DrawerNavigator } from './DrawerNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { View } from 'react-native';
import Groups from '../screens/Tabs/Groups';

const Stack = createStackNavigator();

const AppNavigator = () => {

    // useEffect(() => {
    //     // check if user is logged in or not
    //     getData();
    // }, []);

    // const getData = async () => {
    //     try {
    //         SplashScreen.hide();
    //     } catch (e) {
    //         console.log('error getting stored data');
    //     }
    // };

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <DrawerNavigator />
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default AppNavigator;