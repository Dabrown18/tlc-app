import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import { MainNavigator} from './util/router';

export class AppWithNavigationState extends Component {
  render() {
    const { dispatch, nav } = this.props;

    return (
      <MainNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
    );
  }
}

export const mapStateToProps = ({ nav }) => ({ nav });

export default connect(mapStateToProps)(AppWithNavigationState);