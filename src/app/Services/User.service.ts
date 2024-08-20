import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../Models/User";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class UserService {

    constructor(private http: HttpClient) { }

    serverUrl: string = "https://localhost:5001/api"

    getUser(name: string, password: string): Observable<User> {
        let res = this.http.get(`${this.serverUrl}/User/${name}/${password}`)
        return res as Observable<User>
    }

    private user = new Subject<User>();

    public get() {
        return this.user;
    }

    public set(user: User) {
        localStorage.setItem("user", JSON.stringify(user))
        this.user.next(user);
    }
}