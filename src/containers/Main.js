import React from 'react';
import { Text, View } from 'react-native';
import TabView from 'react-native-scrollable-tab-view';

export const Main = () => (
  <View style={{ flex: 1 }}>
    <TabView
      tabBarTextStyle={{ fontSize: 30 }}
      tabBarPosition="overlayBottom"
    >
      <Text tabLabel="hello">hello</Text>
      <Text tabLabel="yo">yo</Text>
    </TabView>
  </View>
);
