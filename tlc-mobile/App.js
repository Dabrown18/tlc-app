import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AsyncStorage, View } from 'react-native';
import moment from 'moment';
import store from './src/store';
import Spinner from './src/components/Spinner';
import mainStyles from './src/styles/mainStyles';

moment.updateLocale('en', {
  relativeTime : {
    future: "in %s",
    past:   "%s",
    s  : 'now',
    ss : '%d seconds',
    m:  "1min",
    mm: "%dmin",
    h:  "1hr",
    hh: "%dhrs",
    d:  "1d",
    dd: "%dd",
    M:  "1m",
    MM: "%dm",
    y:  "1y",
    yy: "%dy"
  }
});

import AppWithNavigationState from './src/AppWithNavigationState';
import SessionActions from './src/actions/session';

export default class App extends Component {

  state = {
    ready: false
  };

  componentWillMount() {
    AsyncStorage.multiGet(['authToken', 'userId'])
      .then(result => {
        const authToken = result[0][1];
        const userId = result[1][1];

        store.dispatch(SessionActions.setAuthDetails(userId, authToken));

        this.setState({
          ready: true
        });
      });
  }

  render() {
    if (!this.state.ready) {
      return <View style={mainStyles.centerXY}>
        <Spinner size="small" />
      </View>;
    }

    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}