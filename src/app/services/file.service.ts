import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url_base } from '../config/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  public url = url_base;
  constructor(private http: HttpClient) { }

  subirarchivos(file: File): Observable<any> {
    let archivo = new FormData();
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    archivo.append('myfile', file);
    return this.http.post(this.url + 'Modulo1Store', archivo);
  }
}
