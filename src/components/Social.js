import React, {Component} from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import { Fontisto, MaterialCommunityIcons } from '@expo/vector-icons'; 
import * as Linking from 'expo-linking';


class Social extends Component{

    render(){
      return(
        <View style={styles.playView}>
            <TouchableOpacity style={{padding: 32,}} onPress={() => {Linking.openURL('http://api.whatsapp.com/send?phone=+5584996295274')}}>
              <Fontisto  name="whatsapp" size={42} color="white" />
            </TouchableOpacity>
  
            <TouchableOpacity style={{padding: 32,}} onPress={() => {Linking.openURL('https://pt-br.facebook.com/ruralamdeparelhas/')}}>
              <Fontisto  name="facebook" size={42} color="white" />
            </TouchableOpacity>
            
            <TouchableOpacity style={{padding: 32,}} onPress={() => {Linking.openURL('https://www.instagram.com/radioruralamparelhas/')}}>
              <Fontisto  name="instagram" size={42} color="white" />
            </TouchableOpacity>
  
            <TouchableOpacity style={{padding: 32,}} onPress={() => {Linking.openURL('https://www.ruralam.com.br')}}>
              <MaterialCommunityIcons  name="web" size={44} color="white" />
            </TouchableOpacity>
          </View>
      )
    }
  }

  const styles = StyleSheet.create({

    playView:{
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row',
      maxHeight:100,
      backgroundColor:'#3c6996',
    },
  });
  

  module.exports = Social