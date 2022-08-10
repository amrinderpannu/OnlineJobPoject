import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.scss']
})
export class ApplyJobComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.router.navigate(['user/jobApplied'])
  }

}
