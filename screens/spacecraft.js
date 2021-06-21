import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SpacecraftScreen extends React.Component{
    render(){
        return(
            <View style = {{
                flex:1,
                justifyContent:'center',
                alignItems:'center'
            }}>
                <Text>Spacecraft Screen</Text>

            </View>
        )
    }
}