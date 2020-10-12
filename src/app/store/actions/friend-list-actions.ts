import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { FriendListState } from '../state/friend-list-initial.state';
import { Friend } from '../../models/friend';
import { AddFriend } from './friend-list-actions-type';

@Injectable()
export class FriendListActions {
  constructor(private store: Store<FriendListState>) {}

  addFriend(friend: Friend): void {
    this.store.dispatch(new AddFriend(friend));
  }
}
