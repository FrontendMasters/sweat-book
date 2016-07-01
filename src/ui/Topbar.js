import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

export const Topbar = (props) => (
  <View style={[styles.container, props.style]}>
    {props.children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: 'white',
    flex: 1,
    padding: 10
  }
})
