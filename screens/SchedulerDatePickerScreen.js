import React, {useLayoutEffect, useState} from 'react'
import { Platform, StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-elements'
import { StatusBar } from 'expo-status-bar'



const SchedulerDatePicker = ({navigation}) => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
     const currentDate = selectedDate || date;
     setShow(Platform.OS === 'ios');
     setDate(currentDate);
    //  console.log('-----' + date + '-----')
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
                <Text style={{fontFamily: 'Arial Rounded MT Bold', alignSelf: 'center', fontSize: 18, marginTop: 30, marginBottom: 40}}>Choose the date and time.</Text>

                <Button style={{alignSelf: 'center'}} onPress={showDatepicker} title="Choose date" />
                <Button style={{alignSelf: 'center', marginTop: 9}} onPress={showTimepicker} title="Choose time" />
                
                <View style={{marginLeft: '35%', marginTop: '5%'}}>
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
                {/* in the onPress send the "date" state into a collection to save it:  */}
                <Button style={{
                    alignSelf: 'center', marginTop: '8%'}} title='Done  ' onPress={() => navigation.navigate('Schedule')} />
            </View>
        </KeyboardAvoidingView>
    )
}

export default SchedulerDatePicker

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
