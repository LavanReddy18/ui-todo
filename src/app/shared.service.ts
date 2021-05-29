import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

readonly APIUrl = "/api";


  constructor(private http:HttpClient) { }

  getTaskList():Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/task/');
  }

  addTask(val:any) {
    return this.http.post(this.APIUrl + '/task/',val);
  }

  updateTask(val:any) {
    return this.http.put(this.APIUrl + '/task/',val);
  }

  deleteTask(val:any) {
    return this.http.delete(this.APIUrl + '/task/'+val);
  }


}
