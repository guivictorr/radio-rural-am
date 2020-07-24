import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, FlatList, Text, TouchableOpacity, ScrollView} from 'react-native';
import * as Linking from 'expo-linking';

const backgroundImage = require('../../../assets/backgroundNews.jpg')
const newsUrl =   'https://newsapi.org/v2/top-headlines?sources=globo&apiKey=324a7c799b964d7f8d96ac5916c43ca9'

export default class News extends Component {
  constructor(props){
    super(props)
    this.state = {
      data:[]
    }
  }

  loadNews = () => {
    fetch(newsUrl)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.articles || []
        })
      })
  }

  componentDidMount(){
    this.loadNews();
  }
  
  render(){
    return (
      <View style={styles.container}>
        <StatusBar style="light" />
          <Image style={styles.backgroundImage} source={backgroundImage}/>
              <FlatList
                data={this.state.data}
                renderItem={({item}) => (
                  <ScrollView>
                    <TouchableOpacity onPress={() => {Linking.openURL(item.url)}} style={styles.item} activeOpacity={0.6}>
                      <Text style={styles.title}>{item.title}</Text>
                      <Text style={styles.description}>{item.description}</Text>
                      <Image source={{uri: item.urlToImage, width: '100%', height: 100}} style={styles.newsImage}/>
                      <Text style={styles.date}>{`${item.publishedAt.slice(8,10)}/${item.publishedAt.slice(5,7)}/${item.publishedAt.slice(0,4)} - Fonte: G1`}</Text> 
                    </TouchableOpacity>
                  </ScrollView>
                  
                )}
                keyExtractor={item => item.title}
                showsVerticalScrollIndicator={false}
              />       
        </View>
    )}};
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#36699d',
    },

    item: {
      backgroundColor: '#36699d',      
      padding: 20,
      marginVertical: 14,
      marginHorizontal: 32,
      borderRadius:8,
      height:'auto',
      borderTopColor:'#fffd',
      borderTopWidth:3,
      
    },

    title: {
      fontSize: 16,
      fontWeight:'bold',
      color:'#fff'
    },

    description:{
      fontSize: 14,
      color:'#fffc'
    },

    newsImage:{
      borderRadius:8,
      marginTop:12,

    },

    date:{
      color:'#fff7',
      marginTop:12,
    },
    backgroundImage:{
      width:'100%',
      height: '100%',
      opacity:0.2,
      position:'absolute'
    },
  });
  


