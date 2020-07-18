import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image} from 'react-native';
import Player from './src/components/Player'
import Buttons from './src/components/Buttons'

const App = () => {
  
  const logoUri = 'https://scontent.fcpv1-1.fna.fbcdn.net/v/t31.0-0/s526x395/19055119_1347375262020715_8651314089464765977_o.jpg?_nc_cat=109&_nc_sid=dd9801&_nc_ohc=Ma2AkZzvJ30AX_TNpOX&_nc_ht=scontent.fcpv1-1.fna&_nc_tp=7&oh=37f4e0de5d7f35dad85174a4c576bd64&oe=5F36AE9C'

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
        <Image
          source={{ uri: logoUri }}
          style={styles.radioLogo}
        />
        <Buttons/>
        <Player/>
    </View>

  )};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafcff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  radioLogo:{
    marginTop:300,
    width:300, 
    height: 230,
  },
});


export default App;