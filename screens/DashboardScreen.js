import React, {useState, useLayoutEffect} from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import {Input, Card, ListItem, Avatar, Icon, Button } from 'react-native-elements'
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
            headerStyle: { backgroundColor: "#bbcef8"},
            headerTitleStyle: { color: 'black' },
            headerTintColor: 'black',
            headerLeft: () => (
                <View style={{marginLeft: 20}}>
                    <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
                        <Avatar  rounded source={{uri:'https://randomuser.me/api/portraits/men/12.jpg',}} />
                        <Text style={{marginBottom: 8, marginLeft: -6, color: 'white' }}>Anthony</Text>
                    </TouchableOpacity>
                </View>
            )
        })
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={{marginLeft: 220, marginTop: 10}}>
                <Text>Today's Date</Text>
                <Text style={{fontSize: 23, color: 'white', fontWeight: 'bold'}}>Sat Oct 1</Text>
            </View>

            <View>
                <Card borderRadius={20}>
                    <View style={{flexDirection: 'column', padding: 90}}>
                        <Text style={styles.nextcleanText}>Oct 5 2021</Text>
                        <Text style={styles.nextcleanTextTitle}>Next Clean Date</Text>
                    </View>

                    <View>
                        <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
                            <Avatar  rounded source={{uri:'https://randomuser.me/api/portraits/women/3.jpg'}}/>
                            <Text style={{marginBottom: 8 }}>Susan Brooks</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        {/**  @todo implement list item with header and text */}
                        <Text>Placeholder</Text>
                    </View>
                </Card>
            </View>
        </SafeAreaView>
    )
}

export default DashboardScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center'
      },
      nextcleanText: {
        borderColor: "#f4f3f3",
        borderWidth: 1,
        padding: 8,
        backgroundColor: '#f4f3f3',
        color: '#dd88fb',
        fontWeight: 'bold',
        fontSize: 17
      },
      nextcleanTextTitle: {
        borderColor: "#2c2c2c",
        padding: 4,
        backgroundColor: '#2c2c2c',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 10
      },
})
