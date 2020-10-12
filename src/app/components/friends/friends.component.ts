import { Component, Input, OnInit } from '@angular/core';
import { Friend } from '../../models/friend';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent implements OnInit {
  @Input() label = 'Friends from your Scrapbook';

  @Input() friends$: Observable<Friend[]>;

  constructor() {}

  displayedColumns: string[] = ['name', 'age', 'weight', 'friends'];

  ngOnInit(): void {}
}
