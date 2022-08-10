import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from 'src/app/services/user-storage.service';
import { environment } from 'src/environments/environment';


const BASIC_URL = 'http://onlinejobportalbyhustlers-env.eba-t4m5bnuh.us-west-2.elasticbeanstalk.com';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  changePasswordByMatchingOldPassword(data: any):Observable<any>{
    console.log(data);
    return this.http.post("http://onlinejobportalbyhustlers-env.eba-t4m5bnuh.us-west-2.elasticbeanstalk.com/updatePassword",data, {
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
