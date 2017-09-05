import { MainNavigator } from '../util/router';

export default (state, action) => MainNavigator.router.getStateForAction(action, state);