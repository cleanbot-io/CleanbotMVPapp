import React, {useState, useLayoutEffect} from 'react'
import { Button, StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-elements'
import { auth, db } from '../firebase'

const DashboardScreen = ({navigation}) => {
    const signOutUser = () => {
        auth.signOut().then(() => {
            navigation.replace('Login')
        });
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Dashboard',
            headerStyle: { backgroundColor: "#a7bac2"},
            headerTitleStyle: { color: 'black' },
            headerTintColor: 'black',
            headerLeft: () => (
                <View style={{marginLeft: 20}}>
                    <TouchableOpacity onPress={signOutUser} activeOpacity={0.5} >
                        <Avatar rounded source={{uri:'https://randomuser.me/api/portraits/men/14.jpg',}}/>
                    </TouchableOpacity>
                </View>
            )
        })
    }, [])

    return (
        <SafeAreaView>
            <Text>DASHBOARD Component</Text>
        </SafeAreaView>
    )
}

export default DashboardScreen

const styles = StyleSheet.create({})
