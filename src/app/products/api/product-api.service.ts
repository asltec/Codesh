import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProductApiService {

    baseUrl: string = 'http://localhost:4000';
    headers = new HttpHeaders().set('Content-Type', 'application/json');

    constructor(private http: HttpClient) { }

    getList() {
        return this.http.get(`${this.baseUrl}/upload`);
    }

    getById(id): Observable<any> {
        const url = `${this.baseUrl}/upload/${id}`;
        return this.http.get(url, { headers: this.headers }).pipe(
            map((res: Response) => {
                return res || {}
            }),
            catchError(this.errorMgmt)
        )
    }

    deleteProduct(id): Observable<any> {
        const url = `${this.baseUrl}/upload/${id}`;
        return this.http.delete(url, { headers: this.headers }).pipe(
            catchError(this.errorMgmt)
        )
    }

    updateProduct(id, data): Observable<any> {
        const url = `${this.baseUrl}/upload/${id}`;
        return this.http.put(url, data, { headers: this.headers }).pipe(
            catchError(this.errorMgmt)
        )
    }

    sendFileProduct(formData: FormData) {
        return this.http.post(`${this.baseUrl}/upload`, formData)
            .pipe(
                catchError(this.errorMgmt)
            )
    }

    errorMgmt(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
}