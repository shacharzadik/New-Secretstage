import {
  Http,
  Response,
  Headers,
  RequestOptions,
  ResponseContentType
} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

 
 /////////////////////////////////////////////////////////////////
export class ConnectionService {
  private HTTP: Http;
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
  constructor(private _http: Http, private STORAGE: WebStorageService) {
    this.HTTP = _http;
  }
  
  getURL(URLDescription: string): string {
    let ServerAddress: string = 'https://localhost//';
    let LoginAddress: string = ServerAddress + 'Authentication/';
    
    
    switch (URLDescription) {
      case 'example': {
        return LoginAddress + 'example';
      }
 
 
 /////////////////////////////////////////////////////////////////
 
   VerifyLogin(objects) {
    let ItemSendtoServer = {
      object
    };
    return this.HTTP.post(
      this.getURL('example'),
      UserToSendToServer,
      this.options
    ).map((response: Response) => response.json());
  }
