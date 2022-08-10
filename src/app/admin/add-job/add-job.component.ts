import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss']
})
export class AddJobComponent implements OnInit {

  constructor(private adminService:AdminServiceService) { }

  ngOnInit(): void {
  }


  job = {
    companyId :'',
    companyName :'',
    jobDescription :'',
    jobLocation:'',
    jobRole :'',
    jobTitle :'',
    salary :'',
    skillsRequired :''

  }

  onSubmit(){
    /*
    console.log("form submitted");
    console.log(this.job.companyId);
    console.log(this.job.companyName);
    console.log(this.job.jobDescription);
    console.log(this.job.jobLocation);
    console.log(this.job.jobRole);
    console.log(this.job.jobTitle);
    console.log(this.job.salary);
    console.log(this.job.skillsRequired);
    */

    let header = this.adminService.createAuthorizationHeader();
    let token = this.adminService.generateToken();
    console.log(token);
    console.log(header);
    this.adminService.addJob(this.job);
    alert('Job has been added Successfully')
  }

}
