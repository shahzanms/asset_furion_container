import { AuthFacade } from 'src/app/facades/auth.facade';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'asset_fusion_container';
  constructor(private authFacade: AuthFacade) {}

  ngOnInit(): void {
    this.authFacade.init();
  }
}
