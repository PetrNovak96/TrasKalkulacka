import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { ApiResponseError, ApiResponse } from './api-model';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/index';
import { environment } from '../../environments/environment';

// TN means it is type named by property name
// TP means type named by property path - can be same like named by name, so diversed

/**
 * Trask DevOps academy demo seed application
 */
@Injectable({
  providedIn: 'root'
})
export class GatewayService {
  private domain: string = 'http://localhost/api';
  constructor(public http: HttpClient) {}

  /**
   *
   */
  public getDemoDemoEndPoint(parameters: {
    $queryParameters?: any;
    config?: any;
  }): Observable<ApiResponse> {
    let url = `${environment.apiBase}/demo/demoEndPoint`;
    let queryParameters: any = {};
    if (parameters.$queryParameters) {
      queryParameters = parameters.$queryParameters;
    }
    return this.http.get(url, queryParameters) as any;
  }
}
