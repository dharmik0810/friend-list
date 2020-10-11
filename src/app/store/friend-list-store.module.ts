import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { friendListReducer } from './reducers/friend-list-reducer';
import { FriendListSelectors } from './selectors/friend-list-selectors';
import { FriendListActions } from './actions/friend-list-actions';
import {
  FRIEND_LIST_STATE_KEY,
  FriendListState,
} from './state/friend-list-initial.state';
import { EffectsModule } from '@ngrx/effects';
import { sessionStorageReducer } from './reducers/session-storage-reducer';

const friendListMetaReducers: MetaReducer<FriendListState>[] = [
  sessionStorageReducer,
];

const friendListStoreModule = StoreModule.forFeature(
  FRIEND_LIST_STATE_KEY,
  friendListReducer,
  {
    metaReducers: friendListMetaReducers,
  }
);

@NgModule({
  declarations: [],
  imports: [CommonModule, friendListStoreModule, EffectsModule.forFeature([])],
  providers: [FriendListActions, FriendListSelectors],
  exports: [],
})
export class FriendListStoreModule {}
