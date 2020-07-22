import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import { Fontisto, MaterialCommunityIcons } from '@expo/vector-icons'; 
import * as Linking from 'expo-linking';


const Social = () => {
      return(
        <View style={styles.socialView}>
            <TouchableOpacity style={styles.socialButton} onPress={() => {Linking.openURL('https://pt-br.facebook.com/ruralamdeparelhas/')}}>
              <Fontisto  name="facebook" size={48} color="white" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.socialButton} onPress={() => {Linking.openURL('http://api.whatsapp.com/send?phone=+5584996295274')}}>
              <Fontisto  name="whatsapp" size={48} color="white" />
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.socialButton} onPress={() => {Linking.openURL('https://www.instagram.com/radioruralamparelhas/')}}>
              <Fontisto  name="instagram" size={48} color="white" />
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.socialButton} onPress={() => {Linking.openURL('https://www.ruralam.com.br')}}>
              <MaterialCommunityIcons  name="web" size={52} color="white" />
            </TouchableOpacity>
          </View>
      )
    }

  const styles = StyleSheet.create({

    socialView:{
      flexDirection:'row',
      marginBottom: 34,
      marginHorizontal:28,
    },
    socialButton:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    }
  });
  

export default Social