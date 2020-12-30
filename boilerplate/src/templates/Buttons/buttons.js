import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import Layout from '../../constants/Layout';
import SimpleText from '../../templates/Text/SimpleText';
import LinearGradient from 'react-native-linear-gradient';
import BackArrow from '../../assets/svg/arrowBackDisabled.svg';
import Lock from '../../assets/svg/lock.svg';
import ForwardArrow from '../../assets/svg/arrowWhiteRight.svg';
import { prop } from 'ramda';
import Attachment from '../../assets/svg/attachment.svg';

export const FixedWidthButton = props => (
    <TouchableOpacity
        onPress={props.onPress}
        disabled={props.disabled}
        style={{
            backgroundColor: props.backgroundColor,
            height: props.height,
            width: props.isDynamic ? Layout.window.width * props.width : props.width,
            justifyContent: props.justifyContent,
            alignItems: props.alignItems,
            borderRadius: props.borderRadius,
            marginBottom: props.marginBottom,
            marginLeft: props.marginLeft,
            marginRight: props.marginRight,
            marginTop: props.marginTop,
            alignSelf: props.alignSelf,
            borderColor: props.borderColor,
            borderWidth: props.borderWidth,
            position: props.position,
            bottom: props.bottom,
            top: props.top,
            right: props.right
        }}>
        <Text style={{ color: props.color, fontWeight: props.weight, fontSize: props.fontSize }}>{props.title}</Text>
    </TouchableOpacity>
);
export const IconButton = props => (
    <TouchableOpacity View
        onPress={props.onPress}
        disabled={props.disabled}
        style={{
            backgroundColor: props.backgroundColor,
            height: props.height,
            width: props.isDynamic ? Layout.window.width * props.width : props.width,
            justifyContent: props.justifyContent,
            alignItems: props.alignItems,
            borderRadius: props.borderRadius,
            marginBottom: props.marginBottom,
            marginLeft: props.marginLeft,
            marginRight: props.marginRight,
            marginTop: props.marginTop,
            alignSelf: props.alignSelf,
            borderColor: props.borderColor,
            borderWidth: props.borderWidth,
            position: props.position,
            bottom: props.bottom,
            top: props.top,
            right: props.right
        }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            {props.isPermisson && <Lock style={{ marginLeft: 15, marginBottom: 5 }} /> }
            {props.isAttachment && <Attachment style={{ marginRight: 15 }} />}
            {props.isBack && <BackArrow style={{ marginRight: 15 }} />}
            <Text style={{ color: props.color, fontWeight: props.weight, fontSize: props.fontSize }}>{props.title}</Text>
            {!props.isBack && !props.isAttachment && <ForwardArrow style={{ marginLeft: 15 }} />}
        </View>
    </TouchableOpacity>
);

export const GradientButton = props => (
    <TouchableOpacity
        onPress={props.onPress}
        disabled={props.disabled}>
        <LinearGradient colors={['#658C8E', '#5DCF9B']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            locations={[0.2, 1]}
            style={{
                height: props.height,
                width: props.width,
                justifyContent: props.justifyContent,
                alignItems: props.alignItems,
                borderRadius: props.borderRadius,
                marginBottom: props.marginBottom,
                marginLeft: props.marginLeft,
                marginRight: props.marginRight,
                marginTop: props.marginTop,
                alignSelf: props.alignSelf,
            }}>
            <SimpleText
                title={props.title}
                fontSize={props.fontSize}
                alignSelf={'center'}
                color={props.color}
                fontWeight={props.fontWeight}
                fontFamily={props.fontFamily}
            />
        </LinearGradient>
    </TouchableOpacity>
);

export const DottedButton = props => (
    <TouchableOpacity
        onPress={props.onPress}
        style={{
            flex: 1,
            backgroundColor: props.backgroundColor,
            height: props.height,
            width: props.isDynamic ? Layout.window.width * props.width : props.width,
            justifyContent: props.justifyContent,
            alignItems: props.alignItems,
            borderRadius: props.borderRadius,
            marginBottom: props.marginBottom,
            marginLeft: props.marginLeft,
            marginRight: props.marginRight,
            marginTop: props.marginTop,
            alignSelf: props.alignSelf,
            borderColor: props.borderColor,
            borderWidth: props.borderWidth,
            position: props.position,
            bottom: props.bottom,
            borderStyle: props.borderStyle,
            borderColor: props.borderColor,
        }}>
        {
            props.isImageButton ? <Image style={{
                    flex: 1,
                    backgroundColor: props.backgroundColor,
                    height: props.height,
                    width: props.isDynamic ? Layout.window.width * props.width : props.width,
                    alignItems: 'center',                    
                    borderRadius: props.borderRadius,
                    position: props.position,
                    marginTop:-1,
                    overflow: "hidden",
                }}  source={props.imageSource}/>
                :
                <SimpleText
                title={props.title}
                fontSize={props.fontSize}
                alignSelf={'center'}
                color={props.color}
                fontWeight={props.fontWeight}
                fontFamily={props.fontFamily}
        />
        }
    </TouchableOpacity>
);
