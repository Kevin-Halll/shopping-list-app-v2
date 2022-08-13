import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { APIResponse } from 'src/interfaces/api.interface';
import { Items, Category } from 'src/interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private API_URL = "http://localhost:3000/shopping_list";
  private API_URL2 = "http://localhost:3000/categories";

  private _handleHttpErrors(retVal: any) {
    return (err: any) => {
      console.log(err);
      return of({status:err.status, message:err.message, data:retVal});
    }
  }

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<APIResponse<Items[]>>{
    return this.http.get<APIResponse<Items[]>>(this.API_URL).pipe(catchError(this._handleHttpErrors([])));
  }

  getItemById(id:string): Observable<APIResponse<Items>>{
    return this.http.get<APIResponse<Items>>(`${this.API_URL }/${id}`);
  }

  createItem(data:Items): Observable<APIResponse<Items>>{
    return this.http.post<APIResponse<Items>>(this.API_URL, data);
  }
  
  updateItem(id:string, data:Items): Observable<APIResponse<Items>>{
    return this.http.patch<APIResponse<Items>>(`${this.API_URL }/${id}`, data);
  }
  
  deleteItem(id:string): Observable<APIResponse<Items>>{
    return this.http.delete<APIResponse<Items>>(`${this.API_URL }/${id}`);
  }
}
