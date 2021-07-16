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
                        <Avatar  rounded source={{uri:'https://randomuser.me/api/portraits/men/12.jpg'}}/>
                        <Text style={{marginBottom: 8, marginLeft: -6, color: 'white' }}>Anthony</Text>
                    </TouchableOpacity>
                </View>
            )
        })
    }, [])

    return (
        <View style={styles.container}>
            <View style={{marginLeft: 220, marginTop: 10}}>
                <Text>Today's Date</Text>
                <Text style={{fontSize: 23, color: 'white', fontWeight: 'bold'}}>Sat Oct 1</Text>
            </View>

            <View borderRadius={20} style={styles.Dash}>
                <View borderRadius={15} style={styles.SubDashWrapper}>
                    <View>
                        <Text style={styles.nextcleanText}>Oct 5 2021</Text>
                        <Text style={styles.nextcleanTextTitle}>Next Clean Date</Text>
                    </View>

                    <View>
                        <TouchableOpacity onPress={signOutUser} activeOpacity={0.5} style={{marginLeft: 25}}>
                            <Avatar rounded source={{uri:'https://randomuser.me/api/portraits/women/3.jpg'}}/>
                        </TouchableOpacity>
                        <Text>Susan Brooks</Text>
                        <Text style={{fontWeight: 'bold', fontFamily: 'Marker Felt'}}>-Top Rated</Text>
                    </View>
                </View>

                <View style={{marginLeft: '5%', marginTop: '5%'}}>
                    <Text style={{fontWeight: 'bold'}}>Susan's Information</Text>
                    <Text>Ratings: 5.0</Text>
                    <Text>Cleans Performed: 230</Text>
                </View>
            </View>
        </View>
    )
}

export default DashboardScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#bbcef8'
      },
      Dash: {
        height: '25%',
        width: '90%',
        justifyContent: 'center',
        backgroundColor: 'white',
         marginTop: 6,
        marginBottom: 6,
        marginLeft: 16,
        marginRight: 16,
        paddingLeft: 16,
        paddingRight: 14,
      },
      SubDashWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 15,
        shadowColor: 'lightgrey',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8,
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 14,
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
