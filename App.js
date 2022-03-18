import 'react-native-gesture-handler';
import React, {Component} from 'react';
import store from './redux/store';
import {Provider} from 'react-redux';
import MainStack from './components/navigate';

import {LogBox} from 'react-native';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainStack />
      </Provider>
    );
  }
}

export default App;
