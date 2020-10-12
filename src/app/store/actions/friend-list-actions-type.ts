import { Action } from '@ngrx/store';
import { Friend } from '../../models/friend';

export enum FriendListActionsEnum {
  ADD_FRIEND = '[FRIEND-LIST]ADD FRIEND',
}

export class AddFriend implements Action {
  readonly type: string = FriendListActionsEnum.ADD_FRIEND;
  constructor(public friend: Friend) {}
}

export type FriendListActionsType = AddFriend;
