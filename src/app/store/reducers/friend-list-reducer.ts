import {
  FriendListActionsType,
  FriendListActionsEnum,
} from '../actions/friend-list-actions-type';
import { FriendListState } from '../state/friend-list-initial.state';
import { addFriend } from './add-friend-reducer';
import {initFriendList} from './init-friend-list-reducer';

export interface ReducerFunctions {
  [actionType: string]: (
    state: FriendListState,
    action: FriendListActionsType
  ) => FriendListState;
}

const reducerFunctions: ReducerFunctions = {
  [FriendListActionsEnum.INIT_FRIEND_LIST]: initFriendList,
  [FriendListActionsEnum.ADD_FRIEND]: addFriend,
};

export function friendListReducer(
  state: FriendListState,
  action: FriendListActionsType
): FriendListState {
  if (action.type in reducerFunctions) {
    return reducerFunctions[action.type](state, action);
  } else {
    return {
      ...state,
    };
  }
}
