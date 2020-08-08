import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Audio } from 'expo-av';
import { MaterialIcons } from '@expo/vector-icons'; 

import styles from './styles'
const radio = new Audio.Sound()

const Button = () => { 

  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const radioStatus = {
    radioUrl: { uri: 'http://143.208.11.104:8606/stream' },
    startPlaying: { shouldPlay: true },
    initialStatus: {
      staysActiveInBackground: true,
      playThroughEarpieceAndroid: false,
    },
  }

  const { radioUrl, initialStatus, startPlaying} = radioStatus

  const loadRadio = async () => {
    if (isLoaded === false) {
      try{
        await radio.loadAsync(radioUrl, startPlaying)
        Audio.setAudioModeAsync(initialStatus);
        setIsLoaded(true)
      }catch{
        alert('Rádio fora do ar. 😢')
      }
    }
  }

  loadRadio()
       
  const radioCommands = () => {
    if(isPlaying === true){
      radio.pauseAsync()
      setIsPlaying(!isPlaying)
    }else{
      radio.playAsync()
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <View style={styles.viewButton}>
      <TouchableOpacity onPress={radioCommands}  style={styles.playButton}>
        <MaterialIcons name={isPlaying ? 'pause-circle-filled' : 'play-circle-filled'} size={84} color="white" />
      </TouchableOpacity> 
    </View>
  )}

export default Button