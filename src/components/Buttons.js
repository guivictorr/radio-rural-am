import React, {Component} from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import { Fontisto } from '@expo/vector-icons'; 

class Buttons extends Component{
    render(){ 
        //'http://143.208.11.104:8606/stream'
        // Radio 24h 'https://shout12.crossradio.com.br:18002/stream'

        const soundObject = new Audio.Sound();

        const radioStatus = {
          radioUri: { uri: 'http://143.208.11.104:8606/stream' },
          startPlaying: { shouldPlay: true },
          isPlaying: true,
          initialStatus: {
            staysActiveInBackground: true,
            playThroughEarpieceAndroid: false,
          }
        }

        soundObject.loadAsync(radioStatus.radioUri, radioStatus.startPlaying);
        Audio.setAudioModeAsync(radioStatus.initialStatus);      

        function playRadio() {
          if(radioStatus.isPlaying === true){
            soundObject.pauseAsync()
            radioStatus.isPlaying = false
          }else{
            soundObject.playAsync()
            radioStatus.isPlaying = true
          }
        }

        return(
        <View style={styles.playButtons}>
          <TouchableOpacity onPress={playRadio}  style={styles.playButton}>
            <Fontisto style={styles.playIcons} name='play' size={32} color='white'/>
            <Fontisto style={styles.playIcons} name='pause' size={32} color='white'/>
          </TouchableOpacity>
        </View>

        
    )}
}

const styles = StyleSheet.create({
    playButton:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        backgroundColor:'#508bc7',
        padding: 16,
        height:100,
        maxWidth: '100%', 
    },

    playIcons:{
      margin:8,
    },


    playButtons:{
        flex:1,
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'center',
        
    },
  });

module.exports = Buttons