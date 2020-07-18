import React, {Component, useState} from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

import { Fontisto, MaterialCommunityIcons } from '@expo/vector-icons'; 
import * as Linking from 'expo-linking';

class Player extends Component{

    render(){
      //'http://143.208.11.104:8606/stream'
        const soundObject = new Audio.Sound();
        const radioUri = 'https://shout12.crossradio.com.br:18002/stream'

        async function loadRadio(){
          await soundObject.loadAsync({ uri: radioUri});
          // await soundObject.playAsync();
        }loadRadio();

        async function stopRadio() {
          try{
            await soundObject.pauseAsync()
          }
          catch{
            console.log('ERRO')
          }
        }

        async function playRadio() {
          try{
            await soundObject.playAsync()
          }
          catch{
            console.log('ERRO')
          }
        }
  
      return(
        
        <View style={styles.playView}>
            <TouchableOpacity onPress={playRadio}  style={styles.playButton}>
              <Fontisto name="play" size={24} color="white" />
            </TouchableOpacity>

            <TouchableOpacity onPress={stopRadio}  style={styles.playButton}>
              <Fontisto name="pause" size={24} color="white" />
            </TouchableOpacity>

          <View style={styles.social}>
            <TouchableOpacity onPress={() => {Linking.openURL('http://api.whatsapp.com/send?phone=+5584996295274')}}>
              <Fontisto  name="whatsapp" size={32} color="white" />
            </TouchableOpacity>
  
            <TouchableOpacity onPress={() => {Linking.openURL('https://pt-br.facebook.com/ruralamdeparelhas/')}}>
              <Fontisto  name="facebook" size={32} color="white" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {Linking.openURL('https://www.instagram.com/radioruralamparelhas/')}}>
              <Fontisto  name="instagram" size={32} color="white" />
            </TouchableOpacity>
  
            <TouchableOpacity onPress={() => {Linking.openURL('https://www.ruralam.com.br')}}>
              <MaterialCommunityIcons  name="web" size={34} color="white" />
            </TouchableOpacity>
            </View>
          </View>
      )
    }
  }

  const styles = StyleSheet.create({

    playView:{
      flex: 1,
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'flex-start',
      maxHeight:100,
      width:'100%',
      backgroundColor:'#4980b8',
    },
    
    playButton:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#508bc7',
      padding: 8,
      height: '100%',
      maxWidth: '20%',
      
    },
    
    social:{
      margin:32,
      flex:1,
      alignItems:'center',
      justifyContent:'space-between',
      flexDirection: 'row',
    }
  });
  

  module.exports = Player