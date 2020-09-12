import React, { useState, useEffect } from 'react';
import { ImageBackground, FlatList } from 'react-native';

import Article from '../../components/Article';

import backgroundImage from '../../../assets/backgroundNews.png'

import styles from './styles'
import api from '../../services/api';

const News = () => {
  const [news, setNews] = useState([])

  async function getNews(){
    const response = await api.get(`/top-headlines?country=br&apiKey=324a7c799b964d7f8d96ac5916c43ca9`)
    const articles = response.data.articles
    setNews(articles)
  }
  
  useEffect(() => {
    getNews()
  }, [])

  function renderArticle ({item}){ 
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
      <ImageBackground 
        style={styles.backgroundImage} 
        source={backgroundImage}
      >
        <FlatList
          data={news}
          keyExtractor={article => article.title}
          renderItem={renderArticle}
          showsVerticalScrollIndicator={false}
        />
      </ImageBackground>
  )
};

export default News


