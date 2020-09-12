import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
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

  async function loadRadio(){
    if (!isLoaded) {
      try{
        await radio.loadAsync(radioUrl, startPlaying)
        Audio.setAudioModeAsync(initialStatus);
        setIsLoaded(true)
      }catch{
        alert('Rádio fora do ar. 😢')
      }
    }
  }

  useEffect(() => {
    loadRadio()
  }, [])
       
  function radioCommands(){
    if(isPlaying){
      radio.pauseAsync()
      setIsPlaying(!isPlaying)
    }else{
      radio.playAsync()
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <View style={styles.viewButton}>
      <TouchableWithoutFeedback onPress={radioCommands}  style={styles.playButton}>
        <MaterialIcons name={isPlaying ? 'pause-circle-filled' : 'play-circle-filled'} size={84} color="white" />
      </TouchableWithoutFeedback> 
    </View>
  )}

export default Button