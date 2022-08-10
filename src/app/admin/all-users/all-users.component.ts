import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  constructor(private adminService:AdminServiceService) { }

  public allUsers=[];

  ngOnInit(): void {
    this.adminService.getAllUsers().subscribe(
      users=>{
        this.allUsers=users;
      },
      error=>{

      }
    )
  }

}
