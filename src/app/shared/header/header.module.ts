import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { 
  MatButtonModule, 
  MatMenuModule, 
  MatToolbarModule, 
  MatIconModule } from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
