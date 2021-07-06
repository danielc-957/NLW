import React, {useEffect} from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import {styles} from './styles';
import RNBootSplash from 'react-native-bootsplash';
import IllustrationImg from '../../assets/illustration.png';
import ButtonIcon from '../../components/ButtonIcon';

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({fade: true});
    }, 1000);
  });

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {'\n'}suas jogatinas{'\n'}facilmente
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {'\n'} favoritos com os seus amigos
        </Text>
        <ButtonIcon title="Entrar com Discord" activeOpacity={0.7} />
      </View>
    </View>
  );
}
