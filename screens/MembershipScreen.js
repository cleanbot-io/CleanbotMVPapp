import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView, ScrollView } from 'react-native'
import {Input, Card, ListItem, Avatar, Icon, Button } from 'react-native-elements'


function MembershipScreen({ navigation}) {
    return (
        <SafeAreaView styles={styles.container}>
            <ScrollView>
                <View>
                    <Text style={{textAlign: 'center', fontSize: 20, marginTop: 7}}>Subscribe to a plan</Text>

                    <View  styles={styles.basicCard}>
                        <Card borderRadius={20}>
                            <View style={{flexDirection: 'row'}}>
                                <Button
                                    icon={
                                        <Icon
                                        name="circle"
                                        size={15}
                                        color="white"
                                        style={{marginRight: 5}}
                                        />
                                    }title="Basic"
                                />
                                <Text style={{marginLeft: 15, fontSize: 36}}>$60</Text>
                            </View>
                            <Card.Divider/>
                            <ListItem>
                                <Text style={{fontSize: 20}}>1 Cleaning Credit</Text>
                            </ListItem>
                            <ListItem>
                                <Icon name='check'/><Text>2 hour deep clean</Text>
                            </ListItem>
                            <ListItem>
                                <Icon name='check'/><Text>Bathroom and Bedroom</Text>
                            </ListItem>
                            <ListItem>
                                <Icon name='check'/><Text>Kitchen cleaning</Text>
                            </ListItem>
                            <ListItem>
                                <Icon name='check'/><Text>Clean all floor surfaces</Text>
                            </ListItem>
                            <ListItem>
                                <Icon name='check'/><Text>Wash dishes + Empty trash</Text>
                            </ListItem>
                        </Card>
                    </View>

                    <View  styles={styles.standardCard}>
                        <Card borderRadius={20}>
                            <View style={{flexDirection: 'row'}}>
                            <Button
                                    icon={
                                        <Icon
                                        name="circle"
                                        size={15}
                                        color="red"
                                        style={{marginRight: 5}}
                                        />
                                    }title="Standard"
                                />
                                <Text style={{marginLeft: 15, fontSize: 36}}>$94</Text>
                            </View>
                            <Card.Divider/>
                            <ListItem>
                                <Text style={{fontSize: 20}}>2 cleaning credits</Text>
                            </ListItem>
                            <ListItem>
                                <Icon name='check'/><Text>2 hour deep clean</Text>
                            </ListItem>
                            <ListItem>
                                <Icon name='check'/><Text>Bathroom and Bedroom</Text>
                            </ListItem>
                            <ListItem>
                                <Icon name='check'/><Text>Kitchen cleaning</Text>
                            </ListItem>
                            <ListItem>
                                <Icon name='check'/><Text>Clean all floor surfaces</Text>
                            </ListItem>
                            <ListItem>
                                <Icon name='check'/><Text>Wash dishes + Empty trash</Text>
                            </ListItem>
                        </Card>
                    </View>

                    <View  styles={styles.premiumCard}>
                        <Card borderRadius={20}>
                            <View style={{flexDirection: 'row'}}>
                            <Button icon={
                                        <Icon
                                        name="circle"
                                        size={15}
                                        color="gold"
                                        style={{marginRight: 5}}
                                        />
                                    } title="Premium"/>
                                <Text style={{marginLeft: 15, fontSize: 36}}>$178</Text>
                            </View>
                            <Card.Divider/>
                            <ListItem>
                                <Text style={{fontSize: 20}}>4 cleaning credits</Text>
                            </ListItem>
                            <ListItem>
                                <Icon name='check'/><Text>2 hour deep clean</Text>
                            </ListItem>
                            <ListItem>
                                <Icon name='check'/><Text>Bathroom and Bedroom</Text>
                            </ListItem>
                            <ListItem>
                                <Icon name='check'/><Text>Kitchen cleaning</Text>
                            </ListItem>
                            <ListItem>
                                <Icon name='check'/><Text>Clean all floor surfaces</Text>
                            </ListItem>
                            <ListItem>
                                <Icon name='check'/><Text>Wash dishes + Empty trash</Text>
                            </ListItem>
                        </Card>
                    </View>
                </View>

                <View>
                <Button style={{marginTop: 20, alignSelf: 'center'}} color="#841584" type="outline" title="Add Payment" onPress={() => navigation.navigate('Payment')} />
                <Button style={{marginTop: 9, alignSelf: 'center'}} color="#841584"  title="  Dashboard  " onPress={() => navigation.navigate('Dashboard')} />
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
    button: {
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 10
      }
})