import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ListView,
  TouchableWithoutFeedback
} from 'react-native';
import { fuzzySearch } from '../services/fuzzySearch';
import { Topbar } from './Topbar';
import LinearGradient from 'react-native-linear-gradient';
import { SearchBar } from './SearchBar';
import Button from 'apsl-react-native-button';

export class ExcerciseList extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      matchingExcercises: ds.cloneWithRows([])
    };
  }

  closeModal = () => {
    this.setState({matchingExcercises: this.state.matchingExcercises.cloneWithRows([])});
    this.props.closeModal();
  }

  addExcerise = (excercise) => {
    this.props.addExcercise(excercise)
    .then(() => this.props.closeModal());
  }

  handleSearch = (searchTerm) => {
    let newState;
    if (!searchTerm || searchTerm.length < 3) {
      newState = this.state.matchingExcercises.cloneWithRows([]);
    } else {
      newState = this.state.matchingExcercises.cloneWithRows(
        fuzzySearch(searchTerm, this.props.excercises, 'name')
      );
    }
    this.setState({matchingExcercises: newState});
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#efefef'}}>
        <Topbar style={{padding: 0}}>
          <LinearGradient
            colors={['#87FC70', '#0BD318']}
            start={[0.0, 0.5]}
            end={[1.0, 0.5]}
            locations={[0.0, 1.0]}
            style={styles.topbar}
          >
            <SearchBar
              placeholder={'search for excercises'}
              autoFocus
              containerStyle={styles.searchBar}
              style={styles.input}
              onTextChange={this.handleSearch.bind(this)}
            />
            <View style={{flex: 0.1}}>
              <Button
                onPress={this.closeModal}
                textStyle={styles.close}
                style={styles.closeButton}
                children={'X'}
              />
            </View>
          </LinearGradient>
        </Topbar>
        <ListView
          dataSource={this.state.matchingExcercises}
          renderRow={rowData => (
            <TouchableWithoutFeedback onPress={() => this.addExcerise.call(this, rowData)}>
              <View style={styles.row}>
                <Text style={styles.rowName}>
                  {rowData.name}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: 'white',
    flex: 0.9,
    borderColor: 'grey',
    borderRadius: 1,
    borderWidth: 1,
    height: 35,
    padding: 5,
    justifyContent: 'center',
    borderRadius: 20
  },
  topbar: {
    flexDirection: 'row',
    flex: 1,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    color: 'black',
    fontSize: 20
  },
  close: {
    fontSize: 34
  },
  closeButton: {
    borderWidth: 0
  },
  row: {
    borderWidth: 1,
    borderColor: 'grey'
  },
  rowName: {
    fontSize: 30
  }
})
