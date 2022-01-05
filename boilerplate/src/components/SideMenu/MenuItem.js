import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import MenuIcon from '../../assets/svg/menuIcon.svg';
import ArrowLeft from '../../assets/svg/arrowLeft.svg';
import ArrowDown from '../../assets/svg/whiteArrowDown.svg';
import SimpleText from '../../templates/Text/SimpleText';
import Colors from '../../constants/Colors/Colors';
import Settings from '../../assets/svg/settings.svg';
import SettingsWhite from '../../assets/svg/settingsWhite.svg';

export const MenuTopHeader = props => {
    return (
        <View style={styles.menuTopHeader}>
            <View style={styles.menuIconContainer}>
                <MenuIcon />
            </View>
            <SimpleText
                color={Colors.inputColor}
                fontSize={16}
                title={props.name ? props.name : 'Ahsan Ali'}
                marginTop={40}
                marginLeft={15}
            />
        </View>
    );
};

export const MenuItem = props => {
    return (
        <TouchableOpacity style={styles.menuItem} onPress={props.onPress}>
            <SimpleText
                color={Colors.inputColor}
                fontSize={14}
                title={props.title}
            />
            {props.count ?
                <View style={styles.count}>
                    <SimpleText
                        color={props.countColor}
                        fontSize={8}
                        title={props.count}
                    />
                </View>
                : null
            }
        </TouchableOpacity>
    );
};

export const MenuHeader = props => {
    return (
        <TouchableOpacity
            style={[
                styles.menuHeader,
                {
                    marginTop: props.marginTop,
                    backgroundColor: props.isActive ?
                        Colors.buttonsBackground : null
                }]}
            onPress={props.onPress}>
            <View style={styles.headerTextContainer}>
                <View style={styles.iconWidth}>
                    {iconHandler(props)}
                </View>
                <SimpleText
                    color={props.isActive ? Colors.white : Colors.textColor}
                    fontSize={15}
                    title={props.title}
                    marginLeft={15}
                />
            </View>
            {props.isActive
                ? <ArrowDown />
                : <ArrowLeft />
            }
        </TouchableOpacity>
    );
};

export const EmptySpacer = props => { return <View style={styles.emptySpace}>{props.title}</View> };

const iconHandler = props => {
    let icon;
    switch (props.type) {
        case 'settings':
            icon = props.isActive ? <SettingsWhite /> : <Settings />;
            break;
        default:
            icon = props.isActive ? <SettingsWhite /> : <Settings />;
    }
    return icon;
}

const styles = StyleSheet.create({
    menuTopHeader: {
        flexDirection: 'row',
        height: 88,
        marginTop: -4,
    },
    menuIconContainer: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.buttonsBackground,
        borderRadius: 25,
        marginTop: 27,
        marginLeft: 30,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 55,
        marginBottom: 20,
    },
    menuHeader: {
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        paddingRight: 18,
        paddingLeft: 18,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 21,
        height: 42,
    },
    emptySpace: {
        marginTop: 10,
    },
    whiteIcon: {
        marginTop: 38,
        marginLeft: 112,
    },
    count: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#32D886',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        position: "absolute",
        right: 20,
    },
    headerTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconWidth: {
        width: 20,
    }
});
