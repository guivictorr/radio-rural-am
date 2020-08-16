import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import * as Linking from 'expo-linking';

import styles from './styles'

const Article = (props) => {

  const formatDate = (date) => {
    const day = date.slice(8, 10)
    const month = date.slice(5, 7)
    const year = date.slice(0, 4)
    return `${day}/${month}/${year}`
  }

  return (
    <TouchableOpacity onPress={() => { Linking.openURL(props.url) }} style={styles.articleBox} activeOpacity={0.6}>
      <Text style={styles.articleTitle}>{props.title}</Text>
      {props.description && <Text style={styles.articleDescription}>{props.description}</Text>}
      {props.image && <Image style={styles.articleImage} source={{ uri: props.image }}/>}

      <View style={styles.articleFooter}>
        <Text style={styles.footerText}>{`Fonte: ${props.font}`}</Text>
        <Text style={styles.footerText}>{formatDate(props.date)}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Article;