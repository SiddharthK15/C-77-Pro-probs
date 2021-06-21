import React from 'react';
import {Text,View, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity, ImageBackground, Image, Platform} from 'react-native';
export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <SafeAreaView style = {styles.droidSafeArea}/>
                
                <View style = {styles.titleBar}>
                <Text style = {styles.titleText}>Stellar Stage</Text>
                </View>
                <TouchableOpacity style = {styles.routeCard} onPress = {()=>this.props.navigation.navigate('SpacecraftScreen')}><Text style = {styles.routeText}>ISS Tracker</Text>
                <Text style = {styles.knowMore}>{'Know more --->'}</Text>
                <Text style = {styles.bgDigit}>1</Text>
               
                </TouchableOpacity>
                
                <TouchableOpacity style = {styles.routeCard} onPress = {()=>this.props.navigation.navigate('StarMapScreen')}><Text style = {styles.routeText}>Meteors</Text>
                <Text style = {styles.knowMore}>{'Know more --->'}</Text>
                <Text style = {styles.bgDigit}>2</Text>
                
               </TouchableOpacity>
                
                <TouchableOpacity style = {styles.routeCard} onPress = {()=>this.props.navigation.navigate('DailyLogoScreen')}><Text style = {styles.routeText}>Updates</Text>
                <Text style = {styles.knowMore}>{'Know more --->'}</Text>
                <Text style = {styles.bgDigit}>3</Text>
                
                </TouchableOpacity>
                
            </View>
        )
        }
}
const styles = StyleSheet.create({
     container: { flex: 1 }, 
     droidSafeArea: { marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 },
      backgroundImage: { flex: 1, resizeMode: 'cover', }, 
      routeCard: { flex: 0.25, marginLeft: 50, marginRight: 50, marginTop: 50, borderRadius: 30, backgroundColor: 'white' },
       titleBar: { flex: 0.15, justifyContent: "center", alignItems: "center" },
        titleText: { fontSize: 40, fontWeight: "bold", color: "white" , textAlign:'center'}, 
        routeText: { fontSize: 35, fontWeight: "bold", color: "black", marginTop: 40, marginRight:-30, paddingLeft: 30 }, 
        knowMore: { paddingLeft: 30, color: "red", fontSize: 15 }, 
        bgDigit:{ position: "absolute", color: "rgba(183, 183, 183, 0.5)", fontSize: 150, right: 20, bottom: -15,zIndex: -1 }, 
        iconImage: { position: "absolute", height: 200, width: 200, resizeMode: "contain", right: 20, top: -80 } 
    });