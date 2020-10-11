import { Action, ActionReducer, INIT, UPDATE } from '@ngrx/store';
import {
  FRIEND_LIST_STATE_KEY,
  FriendListState,
} from '../state/friend-list-initial.state';
import { pick, keys } from 'lodash';

export function sessionStorageReducer(
  reducer: ActionReducer<FriendListState>
): ActionReducer<FriendListState> {
  return (state: FriendListState, action: Action) => {
    const newState = reducer(state, action);
    if (action.type === INIT.toString() || action.type === UPDATE.toString()) {
      let initState = JSON.parse(
        sessionStorage.getItem(FRIEND_LIST_STATE_KEY)
      ) as FriendListState;
      initState = { ...newState, ...initState };
      return initState;
    } else {
      sessionStorage.setItem(
        FRIEND_LIST_STATE_KEY,
        JSON.stringify(pick(newState, keys(newState)))
      );
    }
    return newState;
  };
}
