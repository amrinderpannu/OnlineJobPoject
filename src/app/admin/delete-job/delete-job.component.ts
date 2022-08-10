import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-delete-job',
  templateUrl: './delete-job.component.html',
  styleUrls: ['./delete-job.component.scss']
})
export class DeleteJobComponent implements OnInit {

  constructor(private adminService:AdminServiceService) { }

  ngOnInit(): void {
  }

  delJob = {
    jobId:0
  }


  onDeleteJob(){
  this.adminService.deleteJob(this.delJob.jobId).subscribe(
    response=>{
      console.log("deleted Successfully");
      alert("Successfully Deleted")
    },
    error=>{
      console.log("error Occured");
    }
  );
  }

}
