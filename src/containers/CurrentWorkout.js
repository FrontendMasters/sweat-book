import { connect } from 'react-redux';
import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Button from 'apsl-react-native-button';
import { Topbar, ExerciseModal, WorkoutList } from '../ui';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { fetchCurrentWorkout, addExerciseToCurrentWorkout } from '../actions/actionCreators';
import { setExerciseModalVisibility } from '../actions/actions';

const mapStateToProps = (state) => ({
  user: state.user,
  currentWorkout: state.currentWorkout,
  activeTab: state.ui.activeTab,
  exerciseModal: state.ui.exerciseModal,
  exercises: state.exercises,
  categories: state.categories
});

const mapActionsToProps = (dispatch) => ({
  setModalVisibility(visible) {
    return dispatch(setExerciseModalVisibility(visible));
  }
});

class Container extends Component {
  static defaultProps = {
    currentWorkout: [],
    exercises: []
  }
  componentDidMount() {
    this.props.fetchCurrentWorkout();
  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#52EDC7', '#5AC8FB']}
          style={styles.container}
        >
          <Topbar style={styles.topbar}>
            <Text style={styles.topbarText}>
              Current Workout
            </Text>
          </Topbar>
          <View style={styles.currentWorkout}>
            <WorkoutList
              setModalVisibility={this.props.setModalVisibility}
              currentWorkout={this.props.currentWorkout}
            />
          </View>
        </LinearGradient>
        <ExerciseModal
          exercises={this.props.exercises}
          visible={this.props.exerciseModal}
          closeModal={() => this.props.setModalVisibility(false)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topbar: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderBottomColor: 'white',
    borderBottomWidth: 2
  },
  topbarText: {
    color: '#AB88E7',
    fontSize: 26
  },
  currentWorkout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export const CurrentWorkout = connect(mapStateToProps, mapActionsToProps)(Container);
