/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';

const Badge = (props) => {

    const handleStatus = (props) => {
        if (props.title === 'WAITING') {
            return <View style={[{ ...props, backgroundColor: '#B4B3C3' }]}><Text style={{ color: props.color }}>{props.title}</Text></View>;
        } else if (props.title === 'IN_PROGRESS' || props.title === 'IN PROGRESS') {
            return <View style={[{ ...props, backgroundColor: '#FFB03A' }]}><Text style={{ color: props.color }}>{props.title}</Text></View>;
        } else if (props.title === 'COMPLETED') {
            return <View style={[{ ...props, backgroundColor: '#32D886' }]}><Text style={{ color: props.color }}>{props.title}</Text></View>;
        } else if (props.title === 'NOT_APPROVED' || props.title === 'NOT APPROVED') {
            return <View style={[{ ...props, backgroundColor: '#B4B3C3' }]}><Text style={{ color: props.color }}>{props.title}</Text></View>;
        } else if (props.title === 'NOT_SHIPPED' || props.title === 'NOT SHIPPED') {
            return <View style={[{ ...props, backgroundColor: '#B4B3C3' }]}><Text style={{ color: props.color }}>{props.title}</Text></View>;
        } else if (props.title === 'APPROVED') {
            return <View style={[{ ...props, backgroundColor: '#28B67B' }]}><Text style={{ color: props.color }}>{props.title}</Text></View>;
        }
    };

    return (
        <View>
            {handleStatus(props)}
        </View>
    );
};

export default Badge;
