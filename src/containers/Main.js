import React, { Component } from 'react';
import { Text, View } from 'react-native';
import TabView from 'react-native-scrollable-tab-view';
import { CurrentWorkout } from './CurrentWorkout';

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 0
    }
  }

  handleTabChange = ({i}) => {
    this.setState({activeTab: i});
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <TabView
          tabBarTextStyle={{ fontSize: 30 }}
          tabBarPosition="overlayBottom"
          onChangeTab={this.handleTabChange}
        >
          <CurrentWorkout
            tabLabel="+"
            activeTab={this.state.activeTab}
          />
          <Text tabLabel="yo">yo</Text>
        </TabView>
      </View>
    );
  }
}
