import React from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native'
import {Button, Input, Card, ListItem, Avatar, Icon } from 'react-native-elements'

function MembershipScreen() {
    return (
        <SafeAreaView styles={styles.container}>
            <ScrollView>
                <View>
                    <Text style={{textAlign: 'center', fontSize: 20, marginTop: 7}}>Subscribe to a plan</Text>

                    <View  styles={styles.basicCard}>
                        <Card borderRadius={20}>
                            <View style={{flexDirection: 'row'}}>
                                <Button title="Basic"/>
                                <Text style={{marginLeft: 15, fontSize: 36}}>$52</Text>
                            </View>
                            <Card.Divider/>
                            <ListItem>
                                <Text>Features</Text>
                            </ListItem>
                            <ListItem>
                                <Icon name='check'/><Text>Four cleanings per month</Text>
                            </ListItem>
                            <ListItem>
                                <Icon name='check'/><Text>Four cleanings per month</Text>
                            </ListItem>
                            <ListItem>
                                <Icon name='check'/><Text>Four cleanings per month</Text>
                            </ListItem>
                        </Card>
                    </View>

                    <View  styles={styles.standardCard}>
                        <Card borderRadius={20}>
                            <View style={{flexDirection: 'row'}}>
                            <Button title="Standard"/>
                                <Text style={{marginLeft: 15, fontSize: 36}}>$94</Text>
                            </View>
                            <Card.Divider/>
                            <ListItem>
                                <Text>Features</Text>
                            </ListItem>
                            <ListItem>
                                <Icon name='check'/><Text>Four cleanings per month</Text>
                            </ListItem>
                            <ListItem>
                                <Icon name='check'/><Text>Four cleanings per month</Text>
                            </ListItem>
                            <ListItem>
                                <Icon name='check'/><Text>Four cleanings per month</Text>
                            </ListItem>
                        </Card>
                    </View>

                    <View  styles={styles.premiumCard}>
                        <Card borderRadius={20}>
                            <View style={{flexDirection: 'row'}}>
                            <Button title="Premium" />
                                <Text style={{marginLeft: 15, fontSize: 36}}>$178</Text>
                            </View>
                            <Card.Divider/>
                            <ListItem>
                                <Text>Features</Text>
                            </ListItem>
                            <ListItem>
                                <Icon name='check'/><Text>Four cleanings per month</Text>
                            </ListItem>
                            <ListItem>
                                <Icon name='check'/><Text>Four cleanings per month</Text>
                            </ListItem>
                            <ListItem>
                                <Icon name='check'/><Text>Four cleanings per month</Text>
                            </ListItem>
                        </Card>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default MembershipScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
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