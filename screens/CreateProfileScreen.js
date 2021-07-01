import React, {useLayoutEffect, useState} from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, Input } from 'react-native-elements'
import { StatusBar } from 'expo-status-bar'
import { color } from 'react-native-elements/dist/helpers';


const CreateProfileScreen = ({navigation}) => {
    const [cityAndState, setCityAndState] = useState('')
    const [streetAddress, setStreetAddress] = useState('')
    const [unitOrSuite, setUnitOrSuite] = useState('')
    const [zipCode, setZipCode] = useState('')

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style="light"/>

            <Text h3 style={{marginBottom: 50}}>
                Create your profile
            </Text>

            <View style={styles.inputContainer}>
                <Input
                    placeholder='City & State'
                    autoFocus 
                    type='text'
                    value={cityAndState}
                    onChangeText={(text) => setCityAndState(text)}
                />
                <Input 
                    placeholder='Street address'
                    type='email'
                    value={streetAddress}
                    onChangeText={(text) => setStreetAddress(text)}
                />
                <Input 
                    placeholder='Unit/suite'
                    type='password'
                    secureTextEntry
                    value={unitOrSuite}
                    onChangeText={(text) => setUnitOrSuite(text)}
                />
                <Input 
                    placeholder='Zip code'
                    type='password'
                    secureTextEntry
                    value={zipCode}
                    onChangeText={(text) => setZipCode(text)}
                />
                {/* @TODO: add profile photo input  */}
            </View>
            <View style={styles.hairline} />


            <Text style={styles.secondpart}>What's the size of your home?</Text>

            <View style={styles.btns}>
                <Button  style={styles.btnOne} title='2 bd 1+ ba' />
                <Button  style={styles.btnTwo} title='2 bd 1+ ba' />
                <Button style={styles.btnThree} title='3 bd 2+ ba' />
            </View>

            <Button color="#841584" type="outline" title="Submit" onPress={() => navigation.navigate('DatePicker')} />
        
        </KeyboardAvoidingView>
    )
}

export default CreateProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white'
    },
    inputContainer: {
        width: 300
    },
    secondpart: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 44,
    },
    hairline: {
        backgroundColor: 'black',
        height: 2,
        width: 341,
        marginTop: 60,
    },
    btns: {
        flex: 8,
        justifyContent: 'space-evenly'
    },
})
