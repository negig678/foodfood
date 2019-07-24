import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    url = 'http://localhost:3000';
    constructor(private http: HttpClient) { }
    addData(name, email, comm) {
        const obj = { name, email, comm };
        this
            .http
            .post(`${this.url}/addcomment`, obj)
            .subscribe(res => console.log(res));
    }
    getData() {
        return (
            this
                .http
                .get(`${this.url}/viewcomment`)
        );
    }
    upData(id, comm) {
        const obj = { comm };
        this
            .http
            .post(`${this.url}/updatecomment/${id}`, obj)
            .subscribe(res => console.log(res));
    }
    delData(id) {
        return this.http.get(`${this.url}/deletecomment/${id}`).subscribe();
    }
    editData(id) {
        return this
            .http
            .get(`${this.url}/edit/${id}`);
    }
    up_data(name: any, email: any, comm: any, id: any) {
        const obj = {
            name: name,
            email: email,
            comn: comm
        };
        this
            .http
            .post(`${this.url}/update/${id}`, obj)
            .subscribe(res => console.log('Done'));
    }
    // trainerAdd(name,email,exp,cat)
    // {
    // let obj = { name,email,exp,cat};
    // this.http.post('localhost:3000/addtrainer',obj).subscribe(res => console.log(res));
    // }
    // trainerView(){
    // return this.http.get('localhost:3000/viewtrainer');
    // }
}