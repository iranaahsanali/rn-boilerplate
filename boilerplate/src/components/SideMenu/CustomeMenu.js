import React, { useState, useContext } from 'react';
import {
    DrawerContentScrollView
} from '@react-navigation/drawer';
import { MenuTopHeader, MenuItem, MenuHeader, EmptySpacer } from './MenuItem';
import { View, StyleSheet, ScrollView } from 'react-native';
import Colors from '../../constants/Colors/Colors';

const CustomDrawerContent = props => {
    return (
        <ScrollView contentContainerStyle={styles.scrollviewContainer}>
            <DrawerContentScrollView {...props}>
                <MenuTopHeader name={'Ahsan Ali'} />
                <View style={styles.separator}></View>
                <MenuHeader title={'Settings'}
                    onPress={() => { }}
                    marginTop={24}
                    isActive={true}
                    type={'order'}
                />
                {
                    // count={25}
                    true ?
                        <View style={styles.menuItemBackground}>
                            <MenuItem title={'Notifications'} onPress={() => props.navigation.navigate('Pos')} />
                            <MenuItem title={'Reminder'} onPress={() => props.navigation.navigate('PurchaseOrdersStack')} countColor={'#FFFF'} />
                        </View>
                        : null
                }

                <EmptySpacer />

            </DrawerContentScrollView>
        </ScrollView>
    );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
    logoutIcon: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoutContainer: {
        alignSelf: 'flex-start',
        marginBottom: 20,
        left: 37,
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.separatorColor,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
    },
    menuItemBackground: {
        backgroundColor: Colors.menuItemBackgroundColor,
        marginLeft: 20,
        marginRight: 20,
        marginTop: -20,
        paddingTop: 35,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        zIndex: -1
    },
    scrollviewContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    menuBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginLeft: 20,
        marginTop: 20,
    },
    switch: {
        marginRight: 20
    }
});