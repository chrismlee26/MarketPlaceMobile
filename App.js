import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, Alert, Button, Platform, Dimensions } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  return (
    // <WelcomeScreen />
    <ViewImageScreen />
  );
}

const containerStyle = { backgroundColor: "#727272" };

const styles = StyleSheet.create({
  // container: {
  //   flex: 1, 
  // },
  image: {
    width: '100%',
    height: '100%'
  }
});
