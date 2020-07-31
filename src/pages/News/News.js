import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, Image, FlatList, Text, TouchableOpacity } from 'react-native';
import * as Linking from 'expo-linking';
import api from '../../services/api'

const News = () => {
  const [news, setNews] = useState([])
  const backgroundImage = require('../../../assets/backgroundNews.jpg')

  useEffect(() => {
    api.get('/').then(response => {
      setNews(response.data.articles)
    })
  }, [])

  const renderArticle = ({item}) => {
    
    const formatDate = (date) => {
      const day = date.slice(8, 10)
      const month = date.slice(5, 7)
      const year = date.slice(0, 4)
      return `${day}/${month}/${year}`
    }

    return (
      <TouchableOpacity onPress={() => { Linking.openURL(item.url) }} style={styles.articleBox} activeOpacity={0.6}>

        <Text style={styles.articleTitle}>{item.title}</Text>
        {item.description === null ? <></> : <Text style={styles.articleDescription}>{item.description}</Text>}
        {item.urlToImage === null ? <></> : <Image style={styles.articleImage} source={{ uri: item.urlToImage }}/>}

        <View style={styles.articleFooter}>
          <Text style={styles.footerText}>{`Fonte: ${item.source.name}`}</Text>
          <Text style={styles.footerText}>{formatDate(item.publishedAt)}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Image style={styles.backgroundImage} source={backgroundImage} />
      <FlatList
        data={news}
        keyExtractor={article => article.title}
        renderItem={renderArticle}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36699d',
  },

  articleBox: {
    backgroundColor: '#36699d',
    padding: 16,
    marginVertical: 14,
    marginHorizontal: 32,
    borderRadius: 8,
    height: 'auto',
    borderTopColor: '#fffd',
    borderTopWidth: 3,
  },

  articleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },

  articleDescription: {
    fontSize: 14,
    color: '#fffc'
  },

  articleImage: {
    borderRadius: 8,
    marginTop: 12,
    width: '100%',
    height: 100
  },

  articleFooter: {
    marginTop: 6,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  footerText: {
    color: '#fff5',
  },

  backgroundImage: {
    width: '100%',
    height: '100%',
    opacity: 0.2,
    position: 'absolute'
  },
});

export default News


