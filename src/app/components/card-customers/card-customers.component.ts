import {Component,Input, OnChanges, ViewChild, SimpleChanges} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataDefault } from '../../services/data-default.service';
import {Router} from "@angular/router";

@Component({
    selector: 'app-card-customers',
    templateUrl: './card-customers.component.html',
    styleUrls: ['./card-customers.component.sass'],
})
export class CardCustomersComponent implements OnChanges {

    @Input() arrayCustomer = [];
    data;
    filtro = ''

    constructor(private dataDefault: DataDefault, public router: Router) {
    }

    ngOnChanges(changes: SimpleChanges){
        this.data = changes.arrayCustomer.currentValue
    }

    get value() {
        return this.data.filter((v: any) => {
            if (v.name === null) {
                v.name = ''
            }
            if (v.age === null) {
                v.age = ''
            }
            if (v.city === null) {
                v.city = ''
            }
            return v.name.toLowerCase().includes(this.filtro.toLowerCase()) || v.age.toString().toLowerCase().includes(this.filtro.toLowerCase()) || v.city.toString().includes(this.filtro)
        })
    }

    editCustomer(element) {
        this.dataDefault.objectCustomer.next(element);
        this.router.navigate(['edit-customers']);
    }
}

export interface CustomerElement {
    id: number;
    name: string;
    age: number;
    city: string;
}
