import {
  FriendListState,
  InitialFriendListState,
} from '../state/friend-list-initial.state';
import { FriendListActionsType } from '../actions/friend-list-actions-type';

export function initFriendList(
  state: FriendListState,
  action: FriendListActionsType
): FriendListState {
  return {
    ...InitialFriendListState,
  };
}
