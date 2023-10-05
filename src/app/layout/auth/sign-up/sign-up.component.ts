import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserFacade } from 'src/app/facades/user.facade';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  @ViewChild('signUpForm', { static: false }) signUpForm!: NgForm;

  Roles: any = ['Admin', 'Author', 'Reader'];

  constructor(private userFacade: UserFacade) {}

  register() {
    this.userFacade.signUp(this.signUpForm.value);
  }
}
