import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { cloneDeep } from 'lodash';
import { Friend } from '../../models/friend';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  formGroup: FormGroup;
  items: FormArray;
  @Output() form = new EventEmitter<Friend>();

  constructor() {
    this.formGroup = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
        Validators.pattern('^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+[\'-]?)+$'),
      ]),
      age: new FormControl(null, [
        Validators.required,
        Validators.maxLength(3),
        Validators.pattern('^(0|[1-9][0-9]*)$'),
      ]),
      weight: new FormControl(null, [
        Validators.required,
        Validators.maxLength(4),
        Validators.pattern('^(0|[1-9][0-9]*)$'),
      ]),
      friends: new FormArray([]),
    });
    this.items = this.formGroup.get('friends') as FormArray;
  }

  ngOnInit(): void {
    this.onAddNewItem();
  }

  addFriend(): void {
    if (this.formGroup.valid && this.formGroup.touched) {
      const formData = cloneDeep(this.formGroup.value);
      this.form.emit(formData);
      this.resetForm(this.formGroup, this.items);
    }
  }

  onAddNewItem(): void {
    const newItemControl = new FormControl(null, [
      Validators.required,
      Validators.maxLength(50),
      Validators.pattern('^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+[\'-]?)+$'),
    ]);
    this.items.push(newItemControl);
  }

  onRemoveItem(index: number): void {
    this.items.removeAt(index);
  }

  hasError(controlName: string, errorName: string) {
    return this.formGroup.controls[controlName].hasError(errorName);
  }

  resetForm(formGroup: FormGroup, formArray: FormArray) {
    let control: AbstractControl = null;
    formGroup.reset();
    formGroup.markAsUntouched();
    Object.keys(formGroup.controls).forEach((name) => {
      control = formGroup.controls[name];
      control.setErrors(null);
    });
    while (formArray.length) {
      formArray.removeAt(0);
    }
  }
}
