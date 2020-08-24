import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Image, ImageBackground } from 'react-native';

import Social from '../../components/Social/'
import Buttons from '../../components/Button/'

import backgroundImage from '../../../assets/background.png'
import radioLogo from '../../../assets/radiologo.png'

import styles from './styles'

const Home = () => {
    return (
        <ImageBackground style={styles.backgroundImage} source={backgroundImage}>
          <StatusBar style="light" />
          <Image resizeMode="contain" style={styles.radioLogo} source={radioLogo}/>

          <View style={styles.bottomView}>
            <Social/>
            <Buttons/>
          </View>
        </ImageBackground>      
    )};
  export default Home;