import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {FRIEND_LIST_STATE_KEY, FriendListState} from '../state/friend-list-initial.state';
import { Observable } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';

@Injectable()
export class FriendListSelectors {
  constructor(private store: Store<FriendListState>) {}

  getState(): Observable<FriendListState> {
    return this.store
      .select((state) => state[FRIEND_LIST_STATE_KEY])
      .pipe(withLatestFrom((state) => state));
  }
}
