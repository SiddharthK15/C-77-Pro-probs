import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class DailyLogoScreen extends  React.Component{
    render(){
        return(
            <View style = {{
                flex:1,
                justifyContent:'center',
                alignItems:'center'
            }}>
                <Text>Daily Logo Screen</Text>

            </View>
        )
    }
}