import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ImageBackground, FlatList } from 'react-native';

import Article from '../../components/Article';

import backgroundImage from '../../../assets/backgroundNews.jpg'

import styles from './styles'
import api from '../../services/api';

const News = () => {
  const [news, setNews] = useState([])
  
  useEffect(() => {
    api.get(`/top-headlines?country=br&apiKey=324a7c799b964d7f8d96ac5916c43ca9`)
      .then(response => {
        const data = response.data
        setNews([...data.articles])
      })
  }, [])

  const renderArticle = ({item}) => { 
    return <Article 
      url={item.url} 
      title={item.title}
      description={item.description}
      image={item.urlToImage}
      font={item.source.name}
      date={item.publishedAt}
    />
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground style={styles.backgroundImage} source={backgroundImage} />
      <FlatList
        data={news}
        keyExtractor={article => article.title}
        renderItem={renderArticle}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
};

export default News


