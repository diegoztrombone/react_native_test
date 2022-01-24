/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ViewStyle,
  TextStyle
} from 'react-native';

import {mainStyle} from "./style/main"

interface Styles {
  mainStyle: ViewStyle;
  h1: TextStyle;
  p: TextStyle;
  
}

const styles = StyleSheet.create<Styles>({...mainStyle}) 


export default () => {
  const element = {
    animated: true,
    backgroundColor: 'white',
    color: 'black'
  }
  return (
    <>
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar {...element}/>
      <Text style={styles.h1}>Tarjeta Andalucía</Text>
      <Text style={styles.p}>Validadora</Text>
    </SafeAreaView>
    </>
  )
}

