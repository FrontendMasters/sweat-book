import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Button from 'apsl-react-native-button';

export const Welcome = (props) => (
  <LinearGradient
    colors={['#4A148C', '#880E4F']}
    style={{ flex: 1 }}>
    <View style={styles.titleContianer}>
      <Text style={styles.title}>
        Sweatbook
      </Text>
    </View>
    <View style={styles.lastWorkoutContainer}>
      <Text style={styles.lastWorkoutTitle}>
        Log your fitness
      </Text>
    </View>
    <View style={{ padding: 30 }}>
      <Button
        onPress={props.startWorkout}
        style={styles.button}
        textStyle={styles.buttonText}
        children={'Start Workout'}
      />
    </View>
  </LinearGradient>
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
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center'
  },
  lastWorkoutContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.3
  },
  lastWorkoutTitle: {
    fontSize: 30,
    fontWeight: '100',
    color: 'rgba(255,255,255,0.9)'
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
