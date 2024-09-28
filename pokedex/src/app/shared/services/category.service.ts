import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category, CategoryBody } from '../models/category';
import { Observable, delay } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  constructor(private http: HttpClient) { }
  
  list(): Observable<Category[]> {
    return this.http.get<Category[]>(
      `${environment.backendBaseUrl}/api/v1/store/category`);
      
  }
  
  remove(categoryId: number): Observable<any> {
    return this.http.delete<any>(
      `${environment.backendBaseUrl}/api/v1/store/category/${categoryId}`);
  }

  create(body: CategoryBody): Observable<Category> {
    const url = `${environment.backendBaseUrl}/api/v1/store/category`;
    return this.http.post<Category>(url, body);
  }
}