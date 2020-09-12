import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import * as Linking from 'expo-linking';
import { useNavigation } from '@react-navigation/native';

import styles from './styles'

const Social = () => {
  const navigation = useNavigation();

  const socialLinks = [
    {
      icon: "facebook-official",
      link: "https://pt-br.facebook.com/ruralamdeparelhas/",
    },
    {
      icon: "whatsapp",
      link: "http://api.whatsapp.com/send?phone=+5584996295274",
    },
    {
      icon: "instagram",
      link: "https://www.instagram.com/radioruralamparelhas/",
    },
    {
      icon: "newspaper-o",
      route: "News",
      navigation: true
    },
  ]

  return(
      <>
        {socialLinks.map(item => (
          <TouchableOpacity 
            key={item.icon}
            style={styles.socialButton} 
            onPress={() => {
              item.navigation
              ? navigation.navigate(item.route)
              : Linking.openURL(item.link)
            }}
          >
            <FontAwesome  
              name={item.icon}
              size={48} 
              color="white" 
            />
          </TouchableOpacity>
        ))}
      </>
    )
  }
  
export default Social