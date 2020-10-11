import { FriendListState } from '../state/friend-list-initial.state';
import { AddFriend } from '../actions/friend-list-actions-type';
import { cloneDeep } from 'lodash';

export function addFriend(
  state: FriendListState,
  action: AddFriend
): FriendListState {
  const friendListState: FriendListState = {
    ...state,
  };
  friendListState.friendList.push(cloneDeep(action.friend));
  return friendListState;
}
