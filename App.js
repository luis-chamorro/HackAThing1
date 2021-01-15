import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MovieEntry from './app/components/movieEntry'
import MovieEntryList from './app/components/movieEntryList';
import MoviesListScreen from './app/screens/moviesListScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <MoviesListScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
