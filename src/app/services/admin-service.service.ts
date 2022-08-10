import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserStorageService } from './user-storage.service';
import { Jobs } from '../admin/jobs.model';
import { AllUser } from '../admin/Uers';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  jobs:Array<any>

  loadedJobs:any = [];

  token = `Bearer ${localStorage.getItem('token')}`;

  constructor(private http: HttpClient) { }

  

    createAuthorizationHeader(): HttpHeaders {
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      'Authorization',
      'Bearer ' + localStorage.getItem('token')
    );
  }

  generateToken(){
    return UserStorageService.getToken();
  }  

  addJob(job:any){
    console.log(this.token);
    this.http.post('http://onlinejobportalbyhustlers-env.eba-t4m5bnuh.us-west-2.elasticbeanstalk.com/jobs/addJob',job,{
      headers: new HttpHeaders({'Authorization':`Bearer ${UserStorageService.getToken()}`})
    }).subscribe(response =>{
      console.log("Post Added");
    },
    error=>{
      console.log(error);
    })
  }
/*
  getJobs(){
    this.http.get<{[ key : number]:Jobs}>('http://localhost:8080/jobs/getAllJobs',{
      headers: new HttpHeaders({'Authorization':`Bearer ${UserStorageService.getToken()}`})
    })

    .pipe(
      map((response:{ [ key : number] : Jobs} ) =>{
        const jobsArray:Jobs[]=[];
        for(const key in response){
          if(response.hasOwnProperty(key)){
            jobsArray.push({...response[key],id:key})
          }
        }
        return jobsArray;
      })
    )
    .subscribe(jobs =>{
      console.log("Jobs reterived");
      //console.log(jobs[0].companyName)
      this.loadedJobs = Object.values(jobs);
      this.jobs.push(Object.values(jobs));
      console.log(this.jobs);
      //console.log(Object.values(jobs))
      //console.log(this.loadedJobs);
    },
    error=>{
      console.log(error);
    })
  }
  */

  getJobs():Observable<Jobs[]>{
    return this.http.get<Jobs[]>('http://onlinejobportalbyhustlers-env.eba-t4m5bnuh.us-west-2.elasticbeanstalk.com/jobs/getAllJobs',{
      headers: new HttpHeaders({'Authorization':`Bearer ${UserStorageService.getToken()}`})
     })
  }


  getAllUsers():Observable<AllUser[]>{
    return this.http.get<AllUser[]>('http://onlinejobportalbyhustlers-env.eba-t4m5bnuh.us-west-2.elasticbeanstalk.com/jobs/getAllUsers',{
      headers: new HttpHeaders({'Authorization':`Bearer ${UserStorageService.getToken()}`})
     })
  }

  deleteJob(id:any){
    console.log("Making delete Request");
    return this.http.delete(`http://onlinejobportalbyhustlers-env.eba-t4m5bnuh.us-west-2.elasticbeanstalk.com/jobs/${id}`,{
      headers: new HttpHeaders({'Authorization':`Bearer ${UserStorageService.getToken()}`})
     })
  }

  onEditJob(id:any,jobIdToUpdate:any){
    console.log(" Making Deleting Request");
    return this.http.put(`http://onlinejobportalbyhustlers-env.eba-t4m5bnuh.us-west-2.elasticbeanstalk.com/jobs/updateJob/${id}`,jobIdToUpdate,{
      headers: new HttpHeaders({'Authorization':`Bearer ${UserStorageService.getToken()}`})
    })
  }
}
