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
            <Image style={styles.radioLogo} source={require('../../assets/radiologo.png')}/>
            <Image style={styles.backgroundImage} source={backgroundUri}/>
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
      justifyContent: 'flex-start',
      backgroundColor: '#36699d',
      height:'100%',
    },
    radioLogo:{
      marginTop: 200,
      zIndex:1,
      transform:[{scaleX: 1.3}, {scaleY:1.3}]
    },
    backgroundImage:{
      width:'100%',
      height: '100%',
      position:'absolute',
      opacity:0.2,
    },
    bottomView:{
      flex:1,
      width:'100%',
      justifyContent:'flex-end',
      alignItems:'center',
    }
  });
  
  export default Home;