import React, {useLayoutEffect, useState} from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar'

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


            <Text style={styles.secondpart}>What's the size of your home?</Text>

            <Button title='1 bd 1+ ba' />
            <Button title='2 bd 1+ ba' />
            <Button title='3 bd 2+ ba' />

            <Button color="#841584" title="Submit" onPress={() => navigation.navigate('Dashboard')} />
        
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
        marginTop: 55,
    }
})
