import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { AppConfiguration } from './app-configuration';

@Injectable({
  providedIn: 'root'
})
export class JsonAppConfigService extends AppConfiguration {

  constructor(private http: HttpClient ) {
    super();
  }

  // La función necesita retornar una promesa
  load() {
    return this.http.get<AppConfiguration>('app.config.json')
    .toPromise()
    .then(data => {
      this.title = data.title;
      this.baseUrl = data.baseUrl;
    })
    .catch(() => {
      console.error('No se pudo cargar el archivo de configuración.');
    });
  }
}
