import React, { Component } from 'react';
import { Main, Welcome } from './containers';
import { Provider } from 'react-redux';
import { store } from './store';

export class Root extends Component {
  constructor() {
    super();
    this.state = {
      started: false
    };
  }

  startWorkout = () => {
    this.setState({ started: true });
  }

  renderRoot(ComponentToRender) {
    return (
      <Provider store={store}>
        <ComponentToRender onStartWorkOut={this.startWorkout} />
      </Provider>
    );
  }

  render() {
    const { started } = this.state;
    return started ? this.renderRoot(Main) : this.renderRoot(Welcome);
  }
}
