import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, Alert, Button, Platform, Dimensions } from 'react-native';

export default function App() {
  console.log(require('./app/assets/icon.png'))
  return (
    // styles.container is a plain JS object. Use {{}} for inline
    // <SafeAreaView style={styles.container}>

    <SafeAreaView style={[styles.container, containerStyle]}>
      <StatusBar style="light" />
      <Text style={{ color: 'white', fontSize: 35, letterSpacing: 5, fontFamily: 'Baskerville' }}>limited run</Text>
      <Text>1234567</Text>
      {/* <TouchableHighlight onPress={() => console.log('Image tapped')}>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300" 
          }}  
        />
      </TouchableHighlight> */}
      <Button 
        color="orange"
        title="CLick Me" 
          // onPress={() => Alert.alert("My Title", "My Message", [
          //   {text: "Yes", onPress: () => console.log('Yes')},
          //   {text: "No", onPress: () => console.log('No')},
          // ])}
        // Alert.prompt is iOS only
        onPress={() => 
          Alert.prompt("My Title", "My Message", text => console.log(text))
        }
      />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "#727272" };

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#727272',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 20 : 0,

  },
});
