import { connect } from 'react-redux';
import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Button from 'apsl-react-native-button';
import { Topbar, ExcerciseModal } from '../ui';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { fetchCurrentWorkout } from '../actions/actionCreators';
import { setExcerciseModalVisibility } from '../actions/actions';

const mapStateToProps = (state) => ({
  user: state.user,
  currentWorkout: state.currentWorkout,
  activeTab: state.ui.activeTab,
  excerciseModal: state.ui.excerciseModal
});

const mapActionsToProps = (dispatch) => ({
  fetchCurrentWorkout() {
    return dispatch(fetchCurrentWorkout());
  },
  setModalVisibility(visible) {
    return dispatch(setExcerciseModalVisibility(visible));
  }
});

class Container extends Component {
  static defaultProps = {
    user: {},
    currentWorkout: [],
    activeTab: 0
  }
  componentDidMount() {
    this.props.fetchCurrentWorkout();
  }

  // launchAddExcerciseModal = () => {}

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
            {!this.props.currentWorkout.length ? (
              <View style={styles.addSomeExecercises}>
                <Text style={styles.bigText}>add some excercises</Text>
                <Button
                  onPress={() => this.props.setModalVisibility(true)}
                  style={styles.plusButton}
                  textStyle={styles.plus}
                  children={'+'}
                />
              </View>
            ) : (
              <Text>
                here are your excercises
              </Text>
            )}
          </View>
        </LinearGradient>
        <ExcerciseModal
          visible={this.props.excerciseModal}
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
  },
  addSomeExecercises: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  bigText: {
    fontSize: 36,
    color: 'white'
  },
  plusButton: {
    borderStyle: null,
    borderWidth: 0
  },
  plus: {
    color: 'black',
    fontSize: 60
  }
});

export const CurrentWorkout = connect(mapStateToProps, mapActionsToProps)(Container);
