import { Component, OnInit } from '@angular/core';
import { AuthFacade } from 'src/app/facades/auth.facade';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private authfacade: AuthFacade) {}

  ngOnInit(): void {}
}
