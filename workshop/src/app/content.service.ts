import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InterfacePost } from './interfaces/post';
import { InterfaceTheme } from './interfaces/theme';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }

  loadThemes() {
    return this.http.get<InterfaceTheme[]>('http://localhost:3000/api/themes');
  }

  loadPosts() {
    return this.http.get<InterfacePost[]>('http://localhost:3000/api/posts?limit=5')
  }
}
