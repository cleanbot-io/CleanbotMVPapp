import React, {useState, useLayoutEffect} from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { StyleSheet, View } from 'react-native'
import { Button, Input, Text } from 'react-native-elements'
import { StatusBar } from 'expo-status-bar'
import { set } from 'react-native-reanimated'
import { auth, db } from '../firebase'

const RegisterScreen = ({navigation}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: 'Login'
        })
    }, [navigation])

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
            authUser.user.updateProfile({
                displayName: name
            })
        })
        .catch((error) => alert(error.message))
    }

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style="dark"/>

            <Text h3 style={{marginBottom: 50}}>
                Register an account
            </Text>

            <View style={styles.inputContainer}>
                <Input 
                    placeholder='Full Name'
                    autoFocus 
                    type='text'
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <Input 
                    placeholder='Email'
                    type='email'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input 
                    placeholder='Password'
                    type='password'
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                {/* @TODO: add profile photo input  */}
            </View>

            <Button 
                containerStyle={styles.button} 
                raised 
                onPress={register} 
                title='Register' 
            />
            <View style={{height: 100}} />
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white'
    },
    button: {
        width: 200,
        marginTop: 10,
    },
    inputContainer: {
        width: 300
    }
})
