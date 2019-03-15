import {AfterViewInit, Component, Inject, OnDestroy, OnInit} from '@angular/core';
import { HeaderService } from './shared/services/header.service';
import {AuthService} from './auth/services/auth.service';
import {Subscription} from 'rxjs';
import {SpinnerService} from './core/services/spinner.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit, AfterViewInit, OnDestroy {


  isLoggedIn: boolean;

  headerItems: any[];
  showSpinner: boolean;

  private isLoggedIn$: Subscription;


  constructor(
    private headerService: HeaderService,
    private authService: AuthService,
    private  spinnerService: SpinnerService,
  ) { }

  ngOnInit(): void {
    this.authService.initUser();
    this.headerService.getMenuItems().subscribe( data => {
      this.headerItems = data;
    });
    this.spinnerService.showSpinner.subscribe( value => {
      this.showSpinner = value;
    });
  }

  ngAfterViewInit(): void {
    this.isLoggedIn$ =  this.authService.isLoggedIn.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  ngOnDestroy(): void {
    this.isLoggedIn$.unsubscribe();
  }

}
