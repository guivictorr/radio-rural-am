import React, {Component} from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import { Fontisto } from '@expo/vector-icons'; 

class Buttons extends Component{
    render(){
        
        //'http://143.208.11.104:8606/stream'
        const soundObject = new Audio.Sound();
        const radioUri = 'https://shout12.crossradio.com.br:18002/stream'
        soundObject.loadAsync({ uri: radioUri}, { shouldPlay: true });

        Audio.setAudioModeAsync({
            staysActiveInBackground: true,
            playThroughEarpieceAndroid: false,
          });        

        async function stopRadio() {
          try{
            await soundObject.pauseAsync()
          }
          catch{
            alert('Radio fora do ar')

          }
        }

        async function playRadio() {
          try{
            await soundObject.playAsync()
          }
          catch{
            alert('Radio fora do ar')

          }
        }


        return(
        <View style={styles.playButtons}>
           <TouchableOpacity onPress={playRadio}  style={styles.playButton}>
              <Fontisto name="play" size={24} color="white" />
            </TouchableOpacity>

            <TouchableOpacity onPress={stopRadio}  style={styles.playButton}>
              <Fontisto name="pause" size={24} color="white" />
            </TouchableOpacity>
        </View>
    )}
}

const styles = StyleSheet.create({
    playButton:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#508bc7',
        padding: 8,
        height:100,
        maxWidth: '100%', 
        

    },
    playButtons:{
        flex:1,
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'center',
        
    }
  });

module.exports = Buttons