import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Fontisto, FontAwesome } from '@expo/vector-icons'; 
import * as Linking from 'expo-linking';
import { useNavigation } from '@react-navigation/native';

import styles from './styles'

const Social = () => {
  const navigation = useNavigation();

  const socialLinks = {
    facebook:'https://pt-br.facebook.com/ruralamdeparelhas/',
    whatsapp:'http://api.whatsapp.com/send?phone=+5584996295274',
    instagram:'https://www.instagram.com/radioruralamparelhas/',
    website:'https://www.ruralam.com.br',
  }

  const { facebook, whatsapp, instagram } = socialLinks

  return(
    <View style={styles.socialView}>
      <TouchableOpacity style={styles.socialButton} onPress={() => {Linking.openURL(facebook)}}>
        <Fontisto  name="facebook" size={48} color="white" />
      </TouchableOpacity>
            
      <TouchableOpacity style={styles.socialButton} onPress={() => {Linking.openURL(whatsapp)}}>
        <Fontisto  name="whatsapp" size={48} color="white" />
      </TouchableOpacity>
  
      <TouchableOpacity style={styles.socialButton} onPress={() => {Linking.openURL(instagram)}}>
        <Fontisto  name="instagram" size={48} color="white" />
      </TouchableOpacity>
  
      <TouchableOpacity style={styles.socialButton} onPress={() => {navigation.navigate('News')}}>
        <FontAwesome  name="newspaper-o" size={48} color="white" />
      </TouchableOpacity>
    </View>
    )
  }
  
export default Social