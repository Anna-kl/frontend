import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Users} from '../components/users/users';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class DataServices {
    private user = new BehaviorSubject<Users>(null);
    users = this.user.asObservable();
    private url = 'https://localhost:44359/api/accounts';
    constructor(private  http: HttpClient) {

    }
    changeAccount(User: Users) {
        this.user.next(User);
    }

    getAccount(header: string){
        let  headers: HttpHeaders = new HttpHeaders();

        header = JSON.parse(header)
        headers = headers.append('Authorization', 'Bearer ' + header['access']);
        return this.http.get(this.url, {headers} );
    }
}
