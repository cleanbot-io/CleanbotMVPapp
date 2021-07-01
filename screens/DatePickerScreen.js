import React, {useLayoutEffect, useState} from 'react'
import { Platform, StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-elements'
import { StatusBar } from 'expo-status-bar'



const DatePickerScreen = ({navigation}) => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
     const currentDate = selectedDate || date;
     setShow(Platform.OS === 'ios');
     setDate(currentDate);
     };

     const showMode = (currentMode) => {
     setShow(true);
     setMode(currentMode);
    };

    const showDatepicker = () => {
      showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <View style={styles.btns}>
                <Button type="outline" style={styles.btnOne} title='2 bd 1+ ba' />
                <Button type="outline" style={styles.btnTwo} title='2 bd 1+ ba' />
                <Button type="outline" style={styles.btnThree} title='3 bd 2+ ba' />
            </View>

            <View style={styles.hairline} />
            <View>
                <Button onPress={showDatepicker} title="Show date picker!" />
            </View>

            <View>
                <Button onPress={showTimepicker} title="Show time picker!" />
            </View>
            
            {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
                />
            )}

            <Button title='next' onPress={() => navigation.navigate('Membership')} />
        </KeyboardAvoidingView>
    )
}

export default DatePickerScreen

const styles = StyleSheet.create({
    hairline: {
        backgroundColor: 'black',
        height: 2,
        width: 341,
        marginTop: 60,
        marginBottom: 60,
    },
})
