import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Audio } from 'expo-av';
import { AntDesign } from '@expo/vector-icons'; 

const Buttons = () => { 
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

        const { radioUri, startPlaying, initialStatus } = radioStatus

        async function loadRadio(){
          try{
            await soundObject.loadAsync(radioUri, startPlaying)
          }
          catch{
            alert('Rádio fora do ar')
          }
        } loadRadio()

        Audio.setAudioModeAsync(initialStatus);      

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
          <View style={styles.viewButton}>
            <TouchableOpacity onPress={playRadio}  style={styles.playButton}>
              <AntDesign name="play" size={64} color="white" />
            </TouchableOpacity> 
          </View>
    )}

const styles = StyleSheet.create({
    playButton:{
        justifyContent:'center',
        flexDirection:'row',
        padding: 16,
        maxWidth:100,
    },
    viewButton:{
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#3D78B3',
      width:450,
      height:120,
    }
  });

export default Buttons

/*
<AntDesign name="play" size={64} color="white" />
<AntDesign name="pausecircle" size={64} color="white" />
*/