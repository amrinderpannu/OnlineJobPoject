import { Component, OnInit } from '@angular/core';
import {AdminServiceService} from '../services/admin-service.service'
import { Jobs } from './jobs.model';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private adminService:AdminServiceService) { }


  loadedJobs:any = [];

  jobsRetreived:Jobs[] = [];
  jobs:Array<Jobs>=[
  ]

  public jobbs = [];
  ngOnInit(): void {
/*
    this.adminService.getJobs()
    .subscribe( data=>this.jobbs=data,
      error=>
      {
        
      });
*/
  }

  //jobsloaded = this.adminService.loadedJobs;

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
  }

  getJobs(){
    this.adminService.getJobs()
  }

  loadJobs(){
    console.log(this.adminService.loadedJobs);


    console.log(this.adminService.loadedJobs[0].companyName);



    //this.adminService.getJobs();
    /*
    this.jobsRetreived.push(this.adminService.loadedJobs);
    //console.log(this.jobs[0].companyName);
    let newJobs = new Jobs();
    console.log(this.adminService.loadedJobs[0].companyName);
    for(let i=0; i<=this.adminService.loadedJobs.size;i++){
      newJobs.jobId = this.adminService.loadedJobs[i].jobId
      newJobs.companyId = this.adminService.loadedJobs[i].companyId
      newJobs.companyName = this.adminService.loadedJobs[i].companyName
      newJobs.jobDescription = this.adminService.loadedJobs[i].jobDescription
      newJobs.jobLocation = this.adminService.loadedJobs[i].jobLocation
      newJobs.jobRole = this.adminService.loadedJobs[i].jobRole
      newJobs.jobTitle = this.adminService.loadedJobs[i].jobTitle
      newJobs.salary = this.adminService.loadedJobs[i].salary
      newJobs.skillsRequired = this.adminService.loadedJobs[i].skillsRequired
      console.log(this.adminService.loadedJobs[i].companyName)
      //this.jobs.push(newJobs);
      //console.log(newJobs.companyName);
    }
    console.log(this.jobs);
    */

  }
}
