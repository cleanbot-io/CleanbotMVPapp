import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {Button, Input, Card } from 'react-native-elements'

function MembershipScreen() {
    return (
        <View styles={styles.container}>
            <Text style={{textAlign: 'center', fontSize: 20, marginTop: 7}}>Subscribe to a plan</Text>

            <View  styles={styles.basicCard}>
                <Card borderRadius={20}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 23, color: 'red'}}>Basic</Text><Text style={{marginLeft: 15, fontSize: 36}}>$52</Text>
                    </View>
                    <Card.Divider/>
                    <Text style={{color: 'red'}}>Features</Text>
                </Card>
            </View>

            <View  styles={styles.standardCard}>
                <Card borderRadius={20}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 23, color: 'blue'}}>Standard</Text><Text style={{marginLeft: 15, fontSize: 36}}>$94</Text>
                    </View>
                    <Card.Divider/>
                    <Text style={{color: 'blue'}}>Features</Text>
                </Card>
            </View>

            <View  styles={styles.premiumCard}>
                <Card borderRadius={20}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 23, color: '#efc583'}}>Premium</Text><Text style={{marginLeft: 15, fontSize: 36}}>$178</Text>
                    </View>
                    <Card.Divider/>
                    <Text style={{color: '#efc583'}}>Features</Text>
                </Card>
            </View>
        </View>
    )
}

export default MembershipScreen

const styles = StyleSheet.create({
    container: {},
    standardHead: {},
    standardTitle: {
        fontSize: 24,
        color: 'blue'
    },
    standardPrice: {
        color: 'blue'
    },
    basicCard: {},
    standardCard: {},
    premiumCard: {},
})