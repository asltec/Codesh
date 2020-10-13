import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProductService {

  uri = 'localhost:4000/upload';

  HttpUploadOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data',
      'Accept': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  uploadProducts(products: File) {
    const payload = new FormData();
    payload.append('products', products);

    return this.http
      .post(this.uri, payload, this.HttpUploadOptions)
      .pipe(map(result => result));
  }
}