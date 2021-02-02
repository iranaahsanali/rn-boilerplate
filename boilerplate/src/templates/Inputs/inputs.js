import React, { useState, useRef } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import SimpleText from '../Text/SimpleText';
import ModalDropdown from 'react-native-modal-dropdown';
import ArrowDown from '../../assets/svg/arrowDown.svg';
import ArrowUP from '../../assets/svg/arrowUp.svg';
import Calendar from '../../assets/svg/calendar.svg';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Layout from '../../constants/Layout';
import TextInputMask from 'react-native-text-input-mask';
import Colors from '../../constants/Colors';

export const InputContainer = props => (
    <View
        style={{
            width: Layout.window.width * props.width,
            height: props.height,
            flexDirection: props.direction,
            justifyContent: props.justifyContent,
            alignItems: props.alignItems,
            borderWidth: props.borderWidth,
            borderRadius: props.borderRadius,
            borderColor: Colors.borderColor,
            marginBottom: props.marginBottom,
            marginLeft: props.marginLeft,
            marginRight: props.marginRight,
            marginTop: props.marginTop,
            alignSelf: props.alignSelf,
        }}>
        {props.children}
    </View>
);

export const CustomTextInput = React.forwardRef((props, ref) => (
    <TextInput
        backgroundColor={props.backgroundColor}
        editable={props.editable}
        value={props.value}
        onChangeText={props.onChangeText}
        onBlur={props.onBlur}
        placeholder={props.placeholder}
        returnKeyType={props.returnKeyType}
        onSubmitEditing={props.onSubmitEditing}
        ref={ref}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        placeholderTextColor={props.isPlaceholderColor ?
            Colors.inputColor : Colors.placeholderColor}
        style={{
            color: Colors.inputColor,
            marginLeft: props.marginLeft,
            marginRight: props.marginRight,
            paddingRight: props.paddingRight,
            paddingLeft: props.paddingLeft,
            fontSize: props.fontSize,
            alignSelf: props.alignSelf,
            textAlign: Layout.window.isRTL ? 'right' : 'left',
            flex: 1,
        }}>
    </TextInput>
));

export const MultilineTextInput = React.forwardRef((props, ref) => (
    <TextInput
        textAlignVertical={'top'}
        multiline={true}
        numberOfLines={props.numberOfLines}
        value={props.value}
        onChangeText={props.onChangeText}
        onBlur={props.onBlur}
        placeholder={props.placeholder}
        returnKeyType={props.returnKeyType}
        onSubmitEditing={props.onSubmitEditing}
        ref={ref}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        placeholderTextColor={props.isPlaceholderColor ?
            Colors.inputColor : Colors.placeholderColor}
        style={{
            color: Colors.inputColor,
            marginLeft: props.marginLeft,
            marginRight: props.marginRight,
            paddingRight: props.paddingRight,
            paddingLeft: props.paddingLeft,
            fontSize: props.fontSize,
            alignSelf: props.alignSelf,
            textAlign: Layout.window.isRTL ? 'right' : 'left',
            flex: 1,
        }}>
    </TextInput>
));

export const TextInputComponent = props => {
    return (
        <View>
            {props.children}
        </View>
    );
};

export const DropDown = props => {
    const [isOpened, setIsOpened] = useState(false);
    const dropdownref = useRef(null);
    const [isSelected, setIsSelected] = useState(props.isSelected);
    const drpFrame = (style) => {
        style.height = props.options.length > 4 ? 200 : - 1;
        return style;
    }
    return (
        <View style={{ flexDirection: 'row' }}>
            <ModalDropdown
                onDropdownWillShow={() => setIsOpened(true)}
                onDropdownWillHide={() => setIsOpened(false)}
                enableEmptySections
                ref={dropdownref}
                defaultValue={props.defaultValue}
                adjustFrame={style => drpFrame(style)}
                renderRow={(value) =>
                    <SimpleText
                        color={Colors.textColor}
                        fontSize={props.fontSize}
                        title={props.isObject ? props.isTitle ? value.title : props.isLabel ? value.label : value.name : value}
                        padding={props.padding}
                        alignSelf={'flex-start'}
                    />}
                renderSeparator={(value) => <View style={styles.dropDownSeparator}></View>}
                renderButtonText={(value) =>
                    <SimpleText
                        color={Colors.inputColor}
                        fontSize={props.fontSize}
                        title={props.isObject ? props.isTitle ? value.title : props.isLabel ? value.label : value.name : value}
                        padding={props.padding}
                        alignSelf={'flex-start'}
                    />
                }
                textStyle={[styles.dropDownPlaceholderStyle, { color: isSelected ? Colors.inputColor : Colors.placeholderColor }]}
                dropdownStyle={[styles.dropDownStyles, { width: Layout.window.width * props.width }]}
                style={[styles.dropDownContainer, { width: Layout.window.width * props.width }]}
                options={props.options}
                onSelect={(index, value) => {
                    setIsSelected(true)
                    props.onSelect(value)
                }}
            >
            </ModalDropdown>
            <TouchableOpacity
                onPress={() => dropdownref.current.show()}
                style={styles.arrowPosition}>
                {isOpened

                    ? <ArrowUP />
                    : <ArrowDown />
                }
            </TouchableOpacity>
        </View>
    );
};

export const DatePicker = (props) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    return (
        <View>
            <InputContainer
                width={0.95}
                height={44}
                borderWidth={1}
                borderRadius={4}
                marginTop={8}
                borderColor={Colors.borderColor}
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}>
                <TouchableOpacity onPress={showDatePicker}>
                    <SimpleText
                        title={props.value ? props.value : props.title}
                        fontSize={13}
                        color={props.value ? Colors.inputColor : Colors.placeholderColor}
                        marginLeft={12}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.calendar}
                    onPress={showDatePicker}>
                    <Calendar />
                </TouchableOpacity>
            </InputContainer>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                maximumDate={props.maximumDate === undefined ? new Date() : props.maximumDate}
                minimumDate={props.minimumDate}
                onConfirm={(date) => {
                    setDatePickerVisibility(!isDatePickerVisible)
                    props.onConfirm(date)
                }}
                onCancel={hideDatePicker}
            />
        </View>
    );
};

export const TextInputMasks = React.forwardRef((props, ref) => (
    <TextInputMask
        value={props.value}
        onChangeText={
            (formatted, extracted) => {
                props.onChangeText(formatted)
            }}
        onBlur={props.onBlur}
        placeholder={props.placeholder}
        returnKeyType={props.returnKeyType}
        onSubmitEditing={props.onSubmitEditing}
        ref={ref}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        style={{
            color: Colors.inputColor,
            marginLeft: props.marginLeft,
            marginRight: props.marginRight,
            paddingRight: props.paddingRight,
            paddingLeft: props.paddingLeft,
            fontSize: props.fontSize,
            alignSelf: props.alignSelf,
            textAlign: Layout.window.isRTL ? 'right' : 'left',
            flex: 1,
        }}
        mask={props.mask}
    />
));

const styles = StyleSheet.create({
    dropDownContainer: {
        height: 44,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 11,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: Colors.borderColor,
        marginTop: 8,
    },
    dropDownSeparator: {
        borderColor: Colors.borderColor,
        borderBottomWidth: 0.8,
    },
    dropDownStyles: {
        marginTop: 12,
        borderWidth: 0,
        elevation: 5,
        marginRight: -12,
        marginLeft: -12,
        // height: 'auto'
    },
    dropDownPlaceholderStyle: {
        fontSize: 15,
    },
    arrowPosition: {
        width: 70,
        height: 44,
        alignItems: 'center',
        position: 'absolute',
        top: 28,
        right: -10,
    },
    calendar: {
        marginRight: 12,
    }
});
