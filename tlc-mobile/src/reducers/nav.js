import { MainNavigator } from '../util/router';
import * as RouterActions from '../actions/router';

const initialNavState = MainNavigator.router.getStateForAction(MainNavigator.router.getActionForPathAndParams('Welcome'));
console.log('state', initialNavState);

export default (state = initialNavState, action) => {
//  const nextState = MainNavigator.router.getStateForAction(action, state);

  switch( action.type ) {
    case RouterActions.LOGOUT:
      return MainNavigator.router.getStateForAction(MainNavigator.router.getActionForPathAndParams('Login'));

    default:
      return MainNavigator.router.getStateForAction(action, state);
  }
}
