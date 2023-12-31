import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private apiUrl = 'https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25';

  constructor(private http: HttpClient) { }

  /**
   * 
   * @param query recibe el texto a buscar
   * @param category recibe la categoría para filtrar
   * @returns retorna un observable que contiene la respuesta con la lista de imagenes
   */
  getImages(query: string, category: string): Observable<any> {

    
    if (category === '' && query !== '') {
      return this.http.get<any>(`${this.apiUrl}&q=${query}`);
    } else if (category !== '' && query === '') {
      return this.http.get<any>(`${this.apiUrl}&category=${category}`);
    } else {
      return this.http.get<any>(`${this.apiUrl}&q=${query}&category=${category}`);
    }



  }

}
