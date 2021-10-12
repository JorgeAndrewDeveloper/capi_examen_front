import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { UsersTableComponent } from './users-table/users-table.component';

import { HttpClientModule } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table' 

@NgModule({
  declarations: [
    UsersTableComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule
  ],
  exports: [
    UsersTableComponent
  ]
})
export class UsersModule { }
