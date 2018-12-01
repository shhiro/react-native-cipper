import React from 'react';
import { StyleSheet, View } from 'react-native';
import ClipBoard from './src/component/ClipBoard';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ClipBoard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
