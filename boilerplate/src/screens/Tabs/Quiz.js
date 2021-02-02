import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const Quiz = () => {
    const feedRequest = useSelector(state => state.feed.listFeed);
    return (
        <View style={styles.container}>
            <Text>Quiz Screen</Text>
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

export default Quiz;
