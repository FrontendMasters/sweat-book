import React, { Component } from 'react';
import {
  Modal,
  Text,
  View,
  StyleSheet
} from 'react-native';
import { fuzzySearch } from '../services/fuzzySearch';
import { Topbar } from './Topbar';
import LinearGradient from 'react-native-linear-gradient';
import { SearchBar } from './SearchBar';
import Button from 'apsl-react-native-button';

export class ExcerciseModal extends Component {
  constructor() {
    super();
    this.state = {
      excercises: []
    };
  }
  
  handleSearch = (searchTerm) => {
    this.setState({
      excercises: fuzzySearch(searchTerm, this.props.excercises, 'name')
    })
  }
  
  render() {
    return(
      <Modal
        animationType={'slide'}
        visible={this.props.visible}
        onRequestClose={this.props.closeModal}
      >
        <View>
          <Topbar style={{padding: 0}}>
            <LinearGradient
              colors={['#87FC70', '#0BD318']}
              start={[0.0, 0.5]}
              end={[1.0, 0.5]}
              locations={[0.0, 1.0]}
              style={styles.topbar}
            >
              <SearchBar
                containerStyle={styles.searchBar}
                style={styles.input}
                onTextChange={this.search}
              />
              <View style={{flex: 0.1}}>
                <Button
                  onPress={this.props.closeModal}
                  textStyle={styles.close}
                  style={styles.closeButton}
                  children={'X'}
                />
              </View>
            </LinearGradient>
          </Topbar>
          <View>
            <Text>modal here</Text>
          </View>
        </View>
      </Modal>
    );
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
  }
})
