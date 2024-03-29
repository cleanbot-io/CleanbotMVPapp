import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'

const Schedule = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={{fontFamily: 'Helvetica-Bold', marginTop: 15, fontSize: 26, color: 'black'}}>My Cleaning Schedule</Text>
            {/* @todo: hide next clean date if one isn't scheduled */}
            {/* <Text style={styles.time}>9:30am on Oct 5</Text>
            <Text style={{fontSize: 18}}>- Is your next clean -</Text> */}

            <View style={{marginTop: 20}}>
                {/* @todo: show choose date if one isn't planned. <Button title='Choose Date' style={styles.btns} /> */}
                <Button title='Choose Date' style={styles.btns} onPress={() => navigation.navigate('SchedulerDP')} />
                <Button title='Change Schedule' style={styles.btns}/>
                <Button title='Cancel Next Clean' style={styles.btns} />
            </View>
        </View>
    )
}

export default Schedule

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFEAD1'
      },
      time: {
        fontSize: 27,
        marginTop: 30,
        backgroundColor: 'slateblue',
        padding: 10,
        marginBottom: 5,
        color: 'white'
      },
      btns: {
          marginTop: 7,
          padding: 10
      }
})
