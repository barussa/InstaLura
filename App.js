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
      {id: 2, usuario: 'luca'},
      {id: 3, usuario: 'vitor'}
      ];

      return (
          <FlatList style={styles.container}
            data={fotos}
            keyExtractor={item => item.id}
            renderItem={ ({item}) => 
                <View>
                    <View style={styles.cabecalho}>
                        <Image source={require('./Imagens/pop-os.png')} 
                                style={styles.fotoDePerfil} />
                        <Text>{item.usuario}</Text>
                    </View>
                    <Image source={require('./Imagens/pop-os.png')} 
                        style={styles.foto} />
                </View>
            }
          />
      );
    }
}

const styles = StyleSheet.create({
    container: {
      marginTop: 20
    },
    cabecalho: {
      margin: 10, 
      flexDirection: 'row', 
      alignItems: 'center'
    },
    fotoDePerfil: {
      marginRight: 10, 
      borderRadius: 20, 
      width:40, height:40
    },
    foto: {
      width:width, 
      height:width
    },
});
