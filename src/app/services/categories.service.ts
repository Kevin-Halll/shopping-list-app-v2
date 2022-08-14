import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { APIResponse } from 'src/interfaces/api.interface';
import { Items, Category } from 'src/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private API_URL2 = "http://localhost:3000/categories";

  private _handleHttpErrors(retVal: any) {
    return (err: any) => {
      console.log(err);
      return of({status:err.status, message:err.message, data:retVal});
    }
  }

  constructor(private http:HttpClient) { }

  createGroup(data:Category): Observable<APIResponse<Category>>{
    return this.http.post<APIResponse<Category>>(this.API_URL2, data);
  }
  getAllGroups(): Observable<APIResponse<Category[]>>{
    return this.http.get<APIResponse<Category[]>>(this.API_URL2).pipe(catchError(this._handleHttpErrors([])));
  }

  getGroupById(id:string): Observable<APIResponse<Category>>{
    return this.http.get<APIResponse<Category>>(`${this.API_URL2}/${id}`);
  }
  updateGroup(id:string, data:Category): Observable<APIResponse<Category>>{
    return this.http.patch<APIResponse<Category>>(`${this.API_URL2}/${id}`, data);
  }
  deleteGroup(id:string): Observable<APIResponse<Category>>{
    return this.http.delete<APIResponse<Category>>(`${this.API_URL2}/${id}`);
  }
}
