import { Action } from '@ngrx/store';
import { Friend } from '../../models/friend';

export enum FriendListActionsEnum {
  INIT_FRIEND_LIST= '[FRIEND-LIST]INIT FRIEND LIST',
  ADD_FRIEND = '[FRIEND-LIST]ADD FRIEND',
}

export class InitFriendList implements Action {
  readonly type: string = FriendListActionsEnum.INIT_FRIEND_LIST;
}

export class AddFriend implements Action {
  readonly type: string = FriendListActionsEnum.ADD_FRIEND;
  constructor(public friend: Friend) {}
}

export type FriendListActionsType = InitFriendList | AddFriend;
