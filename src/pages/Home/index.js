import React from 'react';
import { View, Image, ImageBackground } from 'react-native';

import Social from '../../components/Social/';
import Button from '../../components/Button/';

import backgroundImage from '../../../assets/background.png';
import radioLogo from '../../../assets/radiologo.png';

import styles from './styles';

const Home = () => {
  return (
    <ImageBackground style={styles.backgroundImage} source={backgroundImage}>
      <Image resizeMode="contain" style={styles.radioLogo} source={radioLogo} />

      <View style={styles.bottomView}>
        <View style={styles.socialView}>
          <Social />
        </View>
        <Button />
      </View>
    </ImageBackground>
  );
};
export default Home;
