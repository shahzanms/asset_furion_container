import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthFacade } from 'src/app/facades/auth.facade';
import { AuthService } from 'src/app/services/auth.service';
import { authenticate } from 'src/app/store/actions/auth.action';
import { AuthState } from 'src/app/store/models/auth-state.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  @ViewChild('loginForm', { static: false }) loginForm!: NgForm;

  constructor(private authFacade: AuthFacade) {}
  isLoggedIn$: Observable<string> = new Observable<string>();

  ngOnInit(): void {
    this.isLoggedIn$ = this.authFacade.getAuth();
    this.authFacade.getAuth().subscribe((data) => {
    });
  }

  login() {
    this.authFacade.authenticate(
      this.loginForm.value.userName,
      this.loginForm.value.password
    );
  }
}
