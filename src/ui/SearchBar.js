import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

export class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ''
    }
  }
  
  handleTextChange = ({ nativeEvent }) => {
    const { text } = nativeEvent;
    this.props.onTextChange(text)
    this.setState({searchTerm: text});
  }
  
  render() {
    return(
      <View style={[styles.container, this.props.containerStyle]}>
        <TextInput
          {...this.props}
          style={[styles.text, this.props.style || {},]}
          value={this.state.searchTerm}
          onChange={this.handleTextChange}
          underlineColorAndroid={'transparent'}
        />
      </View>
    );
  }
}


const border = {
  borderColor: 'black',
  borderRadius: 1,
  borderWidth: 1
};

const styles = StyleSheet.create({
  container: {
    ...border,
    backgroundColor: 'white'
  },
  text: {
    color: 'black',
    fontSize: 24
  }
});
