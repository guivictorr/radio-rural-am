import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import * as Linking from 'expo-linking';

import styles from './styles'

const Article = (props) => {

  function formatDate(date) {
    let dateArr = date.split('T')[0].split('-', 3)

    let year = dateArr[0]
    let month = dateArr[1]
    let day = dateArr[2]

    let formatedDate = `${day}/${month}/${year}`
    
    return formatedDate
  }

  return (
    <TouchableOpacity onPress={() => { Linking.openURL(props.url) }} style={styles.articleBox} activeOpacity={0.6}>
      <Text style={styles.articleTitle}>{props.title}</Text>
      {props.description ? <Text style={styles.articleDescription}>{props.description}</Text> : null}
      {props.image ? <Image style={styles.articleImage} source={{ uri: props.image }}/> : null}

      <View style={styles.articleFooter}>
        <Text style={styles.footerText}>{`Fonte: ${props.font}`}</Text>
        <Text style={styles.footerText}>{formatDate(props.date)}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Article;