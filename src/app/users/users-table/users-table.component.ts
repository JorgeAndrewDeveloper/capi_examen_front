import { Component, Input, OnInit } from '@angular/core';

import { UserModel } from 'src/app/models/user.model';

import { UsersService } from 'src/app/users.service';

import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})

export class UsersTableComponent implements OnInit {

  ELEMENT_DATA!: UserModel[];
  displayedColumns: string[] = ['name', 'birthday', 'age', 'userAdress'];
  dataSource = new MatTableDataSource<UserModel>(this.ELEMENT_DATA);

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(respUser => {
      this.dataSource.data = respUser.data as UserModel[];
      console.log(this.dataSource);
    });
  }

}