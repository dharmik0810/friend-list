import { Component, OnInit } from '@angular/core';
import { FriendListSelectors } from './store/selectors/friend-list-selectors';
import { Friend } from './models/friend';
import { FriendListActions } from './store/actions/friend-list-actions';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'scrapbook';
  friends: Observable<Friend[]>;

  constructor(
    private friendListActions: FriendListActions,
    private friendListSelector: FriendListSelectors
  ) {}

  ngOnInit(): void {
    this.friends = this.friendListSelector
      .getState()
      .pipe(
        map((state) => state.friendList)
      );
  }

  formData(friend: Friend): void {
    this.friendListActions.addFriend(friend);
  }
}
