import React, {useState, useLayoutEffect} from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
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
                <Text style={{ fontSize: 25, color: 'white', fontWeight: 'bold'}}>Sat Oct 1</Text>
            </View>

            <Text style={{ marginRight: '35%', marginTop: 30, color: '#9aaae1', fontWeight: 'bold', marginBottom: 1 }}>Your Upcoming clean</Text>
            <View borderRadius={20} style={styles.PrimeDash}>
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
                        <Text style={{ fontWeight: 'bold', fontFamily: 'Marker Felt'}}>-Top Rated</Text>
                    </View>
                </View>

                <View style={{marginLeft: '5%', marginTop: '5%'}}>
                    <Text style={{fontWeight: 'bold'}}>Susan's Information</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{marginTop: 5}}>Ratings: 4.8 -</Text>
                        <Icon name='star' color='gold'/>
                    </View>
                    <Text>Cleans Performed: 230</Text>
                    <Text style={{marginTop: 2}}>83 Reviews</Text>
                </View>
            </View>

            <View style={{flexDirection: 'row', marginLeft: 180}}>
                <Text style={{fontSize: 10}}>Previous clean</Text>
                <Text style={{ color: 'white',fontSize: 11, textDecorationLine: 'underline'}}> Sept 20 2021</Text>
            </View>
            <Text style={{ marginRight: '35%', marginTop: 30, color: '#9aaae1', fontWeight: 'bold', marginBottom: -1 }}>Current Subscription Plan</Text>

            <View style={styles.subscriptionCard} borderRadius={20}>
                <TouchableOpacity onPress={() => navigation.navigate('Membership')} borderRadius={20}>
                    <Text style={styles.subscriptionButton}>Premium</Text>
                </TouchableOpacity>
                <View>
                     <View style={{flexDirection: 'row', marginBottom: 3}}>
                        <Icon name='circle' color='white'/>
                        <Text style={{ fontWeight: '700',color: 'white', marginLeft: 5, marginTop: 3}}>4 Cleaning Credits </Text>
                    </View>
                    <View style={{flexDirection: 'row', marginBottom: 3}}>
                        <Icon name='circle' color='white'/>
                        <Text style={{ fontWeight: '700',color: 'white', marginLeft: 5, marginTop: 3}}>2hr deep clean each visit</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginBottom: 3}}>
                        <Icon name='circle' color='white'/>
                        <Text style={{ fontWeight: '700',color: 'white', marginLeft: 5, marginTop: 3}}>1 free extra</Text>
                    </View>
                </View>
            </View>

            <Text style={{ marginRight: '50%', marginTop: 30, color: '#9aaae1', fontWeight: 'bold', marginBottom: -1 }}>Payment method</Text>
            
            <View style={styles.paymentMethod} borderRadius={20}>
                <View>
                    <Text style={{color: 'white', fontWeight: '600'}}>Next Billing date</Text>
                    <Text style={{color: 'lightgrey', fontWeight: '700', fontSize: 20}}>Nov - 3 - 2021</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
                    <Image source={require('../assets/mastercardGruop.png')} />
                </TouchableOpacity>
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
      PrimeDash: {
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
        shadowColor: 'lightgrey',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 7,
      },
      SubDashWrapper: {
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 15,
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
      subscriptionCard: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: '15%',
        width: '90%',
        backgroundColor: '#ff4a4a',
        marginTop: 6,
        marginBottom: 6,
        marginLeft: 16,
        marginRight: 16,
        paddingLeft: 16,
        paddingRight: 14,
        shadowColor: 'lightgrey',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 7,
      },
      subscriptionButton: {
        height: 40,
        width: 85,
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingLeft: '4%',
        paddingTop: '3%',
        paddingBottom: '8%',
        paddingRight: '5%',
      },
      paymentMethod: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: '15%',
        width: '90%',
        backgroundColor: '#5229e0',
        marginTop: 6,
        marginBottom: 6,
        marginLeft: 16,
        marginRight: 16,
        paddingLeft: 16,
        paddingRight: 14,
        shadowColor: 'lightgrey',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 7,
      }
})
