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
        <KeyboardAvoidingView behavior='padding'>
            <View style={{justifyContent: 'center'}}>
                <Text style={{ alignSelf: 'center', fontSize: 18, marginTop: 30, marginBottom: 40}}>How often would you like a cleaner</Text>

                <View style={styles.btnz}>
                    <Button type="outline" title='Weekly' />
                    <Button type="outline" title='Biweekly' />
                    <Button type="outline" title='Monthly' />
                </View>

                <View style={styles.hairline} />

                <Button style={{alignSelf: 'center'}} onPress={showDatepicker} title="Show date picker!" />
                <Button style={{alignSelf: 'center'}} onPress={showTimepicker} title="Show time picker!" />
                
                <View style={{marginLeft: '38%', marginTop: '5%'}}>
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
                </View>

                <Button style={{
                    alignSelf: 'center', marginTop: '10%'}} title='next  ' onPress={() => navigation.navigate('Membership')} />
            </View>
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
        marginRight: '10%',
        marginLeft: '5%',
    },
    often: {},
    btnz: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})
