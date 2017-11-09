import React, { Component } from 'react';
import { Provider } from 'react-redux';
import moment from 'moment';
import store from './src/store';

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

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
