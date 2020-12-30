import React from 'react';
import { Text } from 'react-native';

const SimpleText = props => (
    <Text style={{
        color: props.color,
        fontWeight: props.fontWeight,
        fontFamily: props.fontFamily,
        fontSize: props.fontSize,
        textDecorationLine: props.textDecorationLine,
        textAlign: props.textAlign,
        marginTop: props.marginTop,
        marginLeft: props.marginLeft,
        marginRight: props.marginRight,
        marginBottom: props.marginBottom,
        padding: props.padding,
        alignSelf: props.alignSelf,
        lineHeight: props.lineHeight,
        flexWrap: 'wrap',
        width: props.width
    }}>{props.title}</Text>
);

export default SimpleText;
