import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from 'src/app/services/user-storage.service';
import { environment } from 'src/environments/environment';

const BASIC_URL = 'http://onlinejobportalbyhustlers-env.eba-t4m5bnuh.us-west-2.elasticbeanstalk.com';
@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }

  fetchJob(): Observable<any> {
    return this.http.get("https://www.themuse.com/api/public/jobs?page=1")
  }

  fetchAllJobsByPageNumber(event): Observable<any> {
    return this.http.get("https://www.themuse.com/api/public/jobs?page=" + event)
  }

  fetchJobsByCategory(req, event): Observable<any> {
    console.log(req.validateForm);
    let url = `https://www.themuse.com/api/public/jobs?`;
    req.validateForm.forEach(element => {
      url = url + `category=${element}&`
    });
    url = url + "page=" + event;
    console.log(url);
    return this.http.get(url)
  }

  searchJob(req): Observable<any> {
    return this.http.get("https://www.themuse.com/api/public/jobs?page=1")
  }

  storeJobId(data): Observable<any>{
    console.log(data);
    return this.http.post("http://onlinejobportalbyhustlers-env.eba-t4m5bnuh.us-west-2.elasticbeanstalk.com/favourites",data, {
      headers: this.createAuthorizationHeader(),
  });
  }

  getFavouriteJobsID(): Observable<any>{
    const userid = UserStorageService.getUserId()
    return this.http.get(BASIC_URL+`/favourites/${userid}`, {
      headers: this.createAuthorizationHeader(),
  });
  }
  getFavouriteJobsName(): Observable<any>{
    const userid = UserStorageService.getUserId()
    return this.http.get(BASIC_URL+`favourites/${userid}`, {
      headers: this.createAuthorizationHeader(),
  });
  }
  
  createAuthorizationHeader(): HttpHeaders {
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      'Authorization',
      'Bearer ' + UserStorageService.getToken()
    );
  }
}
