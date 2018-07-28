import {
  Http,
  Response,
  Headers,
  RequestOptions,
  ResponseContentType
} from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable()
 /////////////////////////////////////////////////////////////////
export class ConnectionService {
  private HTTP: HttpClient;
  private header: Headers = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });
  private authHeader: Headers = new Headers({
    Authorization: 'Bearer'
  });
  private options: Object = new RequestOptions({ headers: this.header });
  private authOptions: Object = new RequestOptions({
    headers: this.authHeader
  });
  private headerForDownloadFile: Headers = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Expose-Headers': 'Content'
  });
  private optionsForDownloadFile: Object = new RequestOptions({
    responseType: ResponseContentType.Blob,
    headers: this.headerForDownloadFile
  });
  private headerForUploadFile: Headers = new Headers({
    enctype: 'multipart/form-data',
    'Access-Control-Allow-Origin': '*'
  });
  private optionsForUploadFile = new RequestOptions({
    headers: this.headerForUploadFile
  });
  // constructor(private _http: Http, private STORAGE: WebStorageService) {
  //   this.HTTP = _http;
  // }
  constructor(private _http: HttpClient) {
    this.HTTP = _http;
  }

  getURL(URLDescription: string): string {
    const ServerAddress = 'https://localhost//';
    const LoginAddress: string = ServerAddress + 'Authentication/';
    switch (URLDescription) {
      case 'example': {
        return LoginAddress + 'example';
      }
    }
  }

 /////////////////////////////////////////////////////////////////
  //  VerifyLogin(objects){
  //   const ItemSendtoServer = {
  //     objects
  //   };
  //   return this.HTTP.post(
  //     this.getURL('example'),
  //     UserToSendToServer,
  //     this.options
  //   ).map((response: Response) => response.json());
  // }
  //

}
