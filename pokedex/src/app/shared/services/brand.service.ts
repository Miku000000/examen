import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand, BrandBody } from '../models/brand';
import { Observable, delay } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  
  constructor(private http: HttpClient) { }
  
  list(): Observable<Brand[]> {
    return this.http.get<Brand[]>(
      `${environment.backendBaseUrl}/api/v1/store/brand`);
      
  }
  
  remove(brandId: number): Observable<any> {
    return this.http.delete<any>(
      `${environment.backendBaseUrl}/api/v1/store/brand/${brandId}`);
  }

  create(body: BrandBody): Observable<Brand> {
    const url = `${environment.backendBaseUrl}/api/v1/store/brand`;
    return this.http.post<Brand>(url, body);
  }
}
