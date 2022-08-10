import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-latest-jobs',
  templateUrl: './latest-jobs.component.html',
  styleUrls: ['./latest-jobs.component.scss']
})
export class LatestJobsComponent implements OnInit {

  constructor(private adminService:AdminServiceService){}

  public jobs = [];

  ngOnInit(): void {

    this.adminService.getJobs()
    .subscribe( data=>this.jobs=data,
      error=>
      {
        
      });
  }

/*
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
