import { Component, OnInit } from '@angular/core';
import { FriendListSelectors } from './store/selectors/friend-list-selectors';
import { Friend } from './models/friend';
import { FriendListActions } from './store/actions/friend-list-actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'scrapbook';
  friends: Friend[];

  constructor(
    private friendListActions: FriendListActions,
    private friendListSelector: FriendListSelectors
  ) {
    this.friendListActions.initFriendList();
  }

  ngOnInit(): void {
    this.friendListSelector
      .getState()
      .subscribe((state) => (this.friends = state.friendList));
  }

  formData(friend: Friend) {
    this.friendListActions.addFriend(friend);
  }
}
