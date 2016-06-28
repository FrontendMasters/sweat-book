import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Button from 'apsl-react-native-button';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

export const Welcome = (props) => (
  <View style={{flex: 1}}>
    <LinearGradient
      colors={['#4A148C', '#880E4F']}
      style={styles.container}
    >
      <View style={styles.titleContianer}>
        <Text style={styles.title}>
          Sweatbook
        </Text>
      </View>
      <View style={styles.lastWorkoutContainer}>
        <Text style={styles.lastWorkoutTitle}>
          Your last workout
        </Text>
      </View>
      <View style={{padding: 30 }}>
        <Button
          onPress={props.onStartWorkOut}
          style={styles.button}
          textStyle={styles.buttonText}
          children={'Start Workout'}
        />
      </View>
    </LinearGradient>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  titleContianer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.2
  },
  title: {
    fontSize: 48,
    fontWeight: '500',
    color: '#F3F3F3',
    textAlign: 'center'
  },
  lastWorkoutContainer: {
    flex: 0.3
  },
  lastWorkoutTitle: {
    fontSize: 30,
    fontWeight: '100',
    color: '#F3F3F3'
  },
  button: {
    borderColor: '#EADCDC',
    padding: 10,
    borderRadius: 10
  },
  buttonText: {
    color: '#EADCDC'
  }
});
