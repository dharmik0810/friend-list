import {FriendListState, InitialFriendListState} from '../state/friend-list-initial.state';
import { AddFriend } from '../actions/friend-list-actions-type';

export function addFriend(
  state: FriendListState,
  action: AddFriend
): FriendListState {
  const friendListState: FriendListState = {
    ...InitialFriendListState,
  };
  friendListState.friendList.push(action.friend);
  return friendListState;
}
