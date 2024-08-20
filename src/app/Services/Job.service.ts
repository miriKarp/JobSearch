import { Injectable } from '@angular/core';
import { Job } from '../Models/Job';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class JobService {

    serverUrl: string = "https://localhost:5001/api"

    constructor(private http: HttpClient) { }

    getJobs(): Observable<Job[]> {
        let res = this.http.get(this.serverUrl + "/Job");
        return res as Observable<Job[]>;
    }

}