import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()

export  class ProfileServices {
    private url = 'https://localhost:44359/api/accounts';
    constructor(private  http: HttpClient) {

    }

    uploadUserPic(header: string, file: File){
        let  headers: HttpHeaders = new HttpHeaders();
        const formData = new FormData();
        header = JSON.parse(header)
        formData.append('file', file, file.name);
        headers = headers.append('Authorization', 'Bearer ' + header['access']);
        return this.http.post(this.url + '/userpic', formData, {headers} ).subscribe(
            result => console.log(result)
        );
    }
    getAccount(header: string){
        let  headers: HttpHeaders = new HttpHeaders();

        header = JSON.parse(header)
        headers = headers.append('Authorization', 'Bearer ' + header['access']);
        return this.http.get(this.url, {headers} );
    }
    getPassword(header: string){
        let  headers: HttpHeaders = new HttpHeaders();

        header = JSON.parse(header)
        headers = headers.append('Authorization', 'Bearer ' + header['access']);
        return this.http.get(this.url + '/password', {headers} );
    }
}
