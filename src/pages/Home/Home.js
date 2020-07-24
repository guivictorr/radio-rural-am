import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image} from 'react-native';

import Social from '../../components/Social'
import Buttons from '../../components/Button'
const backgroundImage = require('../../../assets/background.jpg')
const radioLogo = require('../../../assets/radiologo.png')

const Home = () => {
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
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor: '#36699d',
    },
    radioLogo:{
      transform:[{scaleX:0.2}, {scaleY: 0.2}],
      marginBottom:250,
    },
    backgroundImage:{
      width:'100%',
      height: '100%',
      opacity:0.2,
      position:'absolute'
    },
    bottomView:{
      position:'absolute',
      bottom:0,
    }
  });
  
  export default Home;