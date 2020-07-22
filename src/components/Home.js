import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image} from 'react-native';
import Social from './Social'
import Buttons from './Buttons'

const backgroundUri = {uri: 'https://images.unsplash.com/photo-1483000805330-4eaf0a0d82da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}

const Home = () => {
    return (
      <View style={styles.container}>
        <StatusBar style="inverted" />
        <Image style={styles.backgroundImage} source={backgroundUri}/>      
        <Image style={styles.radioLogo} source={require('../../assets/radiologo.png')}/>

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