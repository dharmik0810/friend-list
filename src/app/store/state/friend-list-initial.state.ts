import { Friend } from '../../models/friend';

export interface FriendListState {
  friendList: Friend[];
}

export const InitialFriendListState: FriendListState = {
  friendList: [],
};

export const FRIEND_LIST_STATE_KEY = 'FRIEND-LIST';
