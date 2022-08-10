import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AdminServiceService } from "../services/admin-service.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private adminService:AdminServiceService){}


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let newReq = req;
        let token = this.adminService.generateToken()

        console.log("intercepto",token);

        if(token!=null)
        {

            newReq = newReq.clone({setHeaders:{Authorization:`Bearer ${token}`}})
            console.log(newReq);
        }
        return next.handle(newReq);


        
    }

}