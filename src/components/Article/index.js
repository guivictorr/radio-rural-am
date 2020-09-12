import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import * as Linking from 'expo-linking';

import formatDate from '../../services/formatDate'

import styles from './styles'

const Article = (props) => {
  return (
    <TouchableOpacity 
      onPress={() => { Linking.openURL(props.url) }} 
      style={styles.articleBox} 
      activeOpacity={0.6}
    >
      <Text style={styles.articleTitle}>{props.title}</Text>
      {
        props.description 
        ? <Text style={styles.articleDescription}>{props.description}</Text> 
        : null
      }
      {
        props.image 
        ? <Image style={styles.articleImage} source={{ uri: props.image }}/> 
        : null
      }

      <View style={styles.articleFooter}>
        <Text style={styles.footerText}>{`Fonte: ${props.font}`}</Text>
        <Text style={styles.footerText}>{formatDate(props.date)}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Article;