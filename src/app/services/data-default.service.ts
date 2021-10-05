import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataDefault {

    constructor() {
    } 
    
    public objectCustomer = new BehaviorSubject({});

}