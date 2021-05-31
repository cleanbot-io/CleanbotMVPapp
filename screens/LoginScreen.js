import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {Button, Input } from 'react-native-elements'
import { KeyboardAvoidingView} from 'react-native'
import { StatusBar } from 'expo-status-bar'

import { auth } from '../firebase'
import logo from '../assets/cordova_512.png'

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if(authUser) {
                navigation.replace('home')
            }
        })
        return unsubscribe;
    }, [])

    const signIn = () => {

    }

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style='light'/>
            <Image source={logo} style={{ width: 100, height: 100, marginTop: 50 }} />
            <View style={styles.inputContainer}>
                <Input 
                    placeholder='Email' 
                    autoFocus 
                    type='email' 
                    value={email} 
                    onChangeText={(text) => setEmail(text)} 
                />
                <Input 
                    placeholder='Password' 
                    secureTextEntry 
                    type='password'
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>

            <Button containerStyle={styles.button} onPress={signIn} title='Login'/>
            <Button
                onPress={() => navigation.navigate('Register')} 
                containerStyle={styles.button} 
                type='outline' 
                title='Register'/>
            <View style={{height: 100}} />
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,
    }
})
