import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';

describe('AddFriendComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  function setFormValues(formData: any) {
    const name = component.formGroup.controls.name.setValue(formData.name);
    const age =  component.formGroup.controls.age.setValue(formData.age);
    const weight = component.formGroup.controls.weight.setValue(formData.weight);
    const friends = component.formGroup.controls.friends.setValue(formData.friends);
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test form validity', () => {
    const formGroup = component.formGroup;
    expect(formGroup.valid).toBeFalse();
  });

  it('should have form valid', () => {
    const data = {
      name: 'John',
      age: '29',
      weight: '200',
      friends: ['Micheal']
    };
    setFormValues(data);
    expect(component.formGroup.valid).toBeTruthy();
  });

  it('name field is valid', () => {
    const name = component.formGroup.controls.name;
    name.setValue('');
    expect(name.hasError('required')).toBeTruthy();
    name.setValue('ABC');
    expect(name.hasError('minLength')).toBeFalsy();
    name.setValue('');
    expect(name.hasError('minLength')).toBeFalsy();
    name.setValue('ABC123');
    expect(name.hasError('pattern')).toBeTruthy();
  });

  it('age field is valid', () => {
    const age = component.formGroup.controls.age;
    age.setValue('');
    expect(age.hasError('required')).toBeTruthy();
    age.setValue('12');
    expect(age.hasError('minLength')).toBeFalsy();
    age.setValue('');
    expect(age.hasError('minLength')).toBeFalsy();
    age.setValue('10');
    expect(age.hasError('maxLength')).toBeFalsy();
    age.setValue('ABC123');
    expect(age.hasError('pattern')).toBeTruthy();
  });

  it('weight field is valid', () => {
    const weight = component.formGroup.controls.weight;
    weight.setValue('');
    expect(weight.hasError('required')).toBeTruthy();
    weight.setValue('25');
    expect(weight.hasError('minLength')).toBeFalsy();
    weight.setValue('');
    expect(weight.hasError('minLength')).toBeFalsy();
    weight.setValue('100');
    expect(weight.hasError('maxLength')).toBeFalsy();
    weight.setValue('ABC123');
    expect(weight.hasError('pattern')).toBeTruthy();
  });
});
