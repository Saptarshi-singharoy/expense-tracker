import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HomeScreen from './screens/HomeScreen';

const Root = () => {
  return (
    <View style={styles.back}>
      <HomeScreen />
    </View>
  );
};

export default Root;

const styles = StyleSheet.create({
  back: {
    backgroundColor: 'bisque',
    flex: 1,
  },
});
