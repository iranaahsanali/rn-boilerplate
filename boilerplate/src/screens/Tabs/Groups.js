import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { listFeedRequest } from '../../store/ducks/Feed/actions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SettingsIcon from '../../assets/svg/settings.svg';

const Groups = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();


    const feedRequest = useSelector(state => state.feed.listFeed);

    useEffect(() => {
        dispatch(listFeedRequest());
    }, []);


    return (
        <View style={styles.container}>
            {
                feedRequest.status == 'loading' && <Text>API Fetching Data...</Text>
            }
            {
                feedRequest.status == 'success' ? <Text>Got SUCCESS RESPONSE</Text> : <Text>Got FAILURE RESPONSE</Text>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Groups;