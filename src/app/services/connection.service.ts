
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()

export class ConnectionService {

    private HTTP: Http
    private header: Headers = new Headers({

    })


    getURL(URLDescription: string) {
        let ServerAddress: string = ' http://localhost/secretstage';
        // let LoginAddress : string 
        // let ArtistAddress : string 
        // let HostAddress : string 
        // let EventsAddress : string 
        // let LoginAddress : string 
        // let LoginAddress : string 

        // switch(URLDescription) {
        //     case 'Artist' : {
        //         return ArtistAddress + 'Artist';
        //     }
        // }
        //     case 'Artist' : {
        //         return ArtistAddress + 'Artist';
        //     }
        // }
        //     case 'Artist' : {
        //         return ArtistAddress + 'Artist';
        //     }
        // }
        //     case 'Artist' : {
        //         return ArtistAddress + 'Artist';
        //     }
        // }
        //     case 'Artist' : {
        //         return ArtistAddress + 'Artist';
        //     }
        // }

    }

    //~~ Example For Calls

    // Login(o_User: object) {
    //     let ItemSentToServer = o_User
    //     return this.HTTP.post(
    //         this.getURL('Artist'),
    //         ItemSendToServer,
    //         this.Headers
    //     ).map((Response: Response) => Response.json());
    // }
}