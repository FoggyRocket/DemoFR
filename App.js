/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
//this is for navegation lib
import { createStackNavigator,createAppContainer,createDrawerNavigator ,createSwitchNavigator} from 'react-navigation';
import auth from './app/containers/auth';
import home from './app/containers/home';
import Sidebar from './app/containers/sidebar';


const AuthStack = createStackNavigator(auth(),{initialRouteName:'Login'})
const AppStack = createDrawerNavigator(home(),{initialRouteName:'Home',contentComponent:Sidebar})
export default createAppContainer (createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  }
))
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
