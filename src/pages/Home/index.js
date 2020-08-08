import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Image } from 'react-native';

import Social from '../../components/Social/'
import Buttons from '../../components/Button/'

import styles from './styles'

const Home = () => {
  const backgroundImage = require('../../../assets/background.jpg')
  const radioLogo = require('../../../assets/radiologo.png')
  
    return (
      <View style={styles.container}>
        <StatusBar style="light" />
        <Image style={styles.backgroundImage} source={backgroundImage}/>      
        <Image style={styles.radioLogo} source={radioLogo}/>

        <View style={styles.bottomView}>
          <Social/>
          <Buttons/>
        </View>
      </View>
    )};
  
  
  
  export default Home;