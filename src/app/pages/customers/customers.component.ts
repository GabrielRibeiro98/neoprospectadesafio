import {Component, OnInit, AfterViewInit} from '@angular/core';
import {NetworkService} from '../../services/network.service';
import { URL_GET_CUSTOMERS } from '../../controller/staticValues';
import { HostListener } from '@angular/core';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.sass']
})
export class CustomersComponent implements OnInit{

    list = [];

    width

    constructor(private networkService: NetworkService){

    }

    @HostListener('window:resize', ['$event'])
        onResize(event) {
        this.width = window.innerWidth <= 768
    }

    ngOnInit(){
        this.networkService.get(URL_GET_CUSTOMERS).subscribe((value: any) => {
            this.list = value
            this.width = window.innerWidth <= 768
        })
    }
}
