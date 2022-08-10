import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';


@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.scss']
})
export class EditJobComponent implements OnInit {

  constructor(private adminService:AdminServiceService) { }

  ngOnInit(): void {
  }


  jobIdToUpdate = {
    jobId:0
  }

  jobUpdate = {
    companyId :'',
    companyName :'',
    jobDescription :'',
    jobLocation:'',
    jobRole :'',
    jobTitle :'',
    salary :'',
    skillsRequired :''
  }

  onUpdatingJob(){
    this.adminService.onEditJob(this.jobIdToUpdate.jobId ,this.jobUpdate).subscribe(
      response=>{
        console.log("updated");
        alert('Job have been successfully updated')
      },
      error=>{
        console.log(error);
      }
    )
  }


}
