import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()

export  class AuthServices {
    private url = 'https://localhost:44359/api/auths';
    constructor(private  http: HttpClient) {

        }


    getAuth(username: string, password: string) {
        return this.http.get(this.url + '/get_tokens?' + 'user=' + username + '&password=' + password);
    }

    registration(username: string, password: string) {
        const  headers: HttpHeaders = new HttpHeaders();
        headers.set('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(this.url + '?user=' + username + '&password=' + password, {headers} );
    }
    rememberGenerate(username: string){
        const  headers: HttpHeaders = new HttpHeaders();
        headers.set('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.put(this.url + '/change_password/order' + '?user=' + username, {headers} );
    }
    changePsw(password: string, link: string){
        const  headers: HttpHeaders = new HttpHeaders();
        headers.set('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.put(this.url + '/change_password/user' + '?link=' + link + '&password=' + password,
            {headers} );
    }

}
