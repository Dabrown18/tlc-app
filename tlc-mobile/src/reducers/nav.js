import { MainNavigator } from '../util/router';

export default (state, action) => {
  const nextState = MainNavigator.router.getStateForAction(action, state);

  return nextState || state;
}