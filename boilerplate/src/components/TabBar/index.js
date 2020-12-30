import React from 'react';
import { StyleSheet, View } from 'react-native';
import Home from '../../assets/svg/home.svg';
import HomeActive from '../../assets/svg/homeActive.svg';
import Sale from '../../assets/svg/sale.svg';
import SaleActive from '../../assets/svg/saleActive.svg';
import Purchase from '../../assets/svg/purchase.svg';
import PurchaseActive from '../../assets/svg/purchaseActive.svg';
import Inventory from '../../assets/svg/inventory.svg';
import InventoryActive from '../../assets/svg/inventoryActive.svg';
// import Colors from '../constants/Colors';

export const TabBar = props => {
    return (
        <View style={props.focused ? styles.menuTopHeader : null}>
            <View style={[styles.icon, { marginTop: props.focused ? 15 : 0 }]}>
                {iconHandler(props)}
            </View>
        </View>
    );
};

const iconHandler = props => {
    let icon;
    switch (props.route) {
        case 'Home':
            icon = props.focused ? <HomeActive /> : <Home />;
            break;
        case 'Quiz':
            icon = props.focused ? <SaleActive /> : <Sale />;
            break;
        case 'Groups':
            icon = props.focused ? <PurchaseActive /> : <Purchase />;
            break;
        case 'Feed':
            icon = props.focused ? <InventoryActive /> : <Inventory />;
            break;
        default:
            icon = props.focused ? <HomeActive /> : <Home />;
    }
    return icon;
}

const styles = StyleSheet.create({
    menuTopHeader: {
        height: 110,
        width: 72,
        marginBottom: 0,
        marginTop: 60,
        backgroundColor: 'green',
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
    },
    icon: {
        alignSelf: 'center',
        marginBottom: 0,
    }
});
