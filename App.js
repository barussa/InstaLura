/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, FlatList} from 'react-native';

const width = Dimensions.get('screen').width;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class InstaluraMobile extends Component {
  render() {
    const fotos = [
     {id: 1, usuario: 'pedro'},
     {id: 2, usuario: 'rafael'},
     {id: 3, usuario: 'vitor'}
  ];

    return (
<FlatList style={{marginTop: 20}}
  data={fotos}
  keyExtractor={item => item.id}
  renderItem={ ({item}) => 
    <View>
      <Text>{item.usuario}</Text>
      <Image source={require('./Imagens/pop-os.png')} style={{width:width, height:width}} />
    </View>
  }
/>
      );
        }
}

