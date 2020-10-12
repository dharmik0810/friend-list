import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendsComponent } from './friends.component';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [FriendsComponent],
  exports: [
    FriendsComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class FriendsModule { }
