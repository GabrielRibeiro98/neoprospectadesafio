import {Component,Input, OnChanges, ViewChild, SimpleChanges, AfterViewInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataDefault } from '../../services/data-default.service';
import {Router} from "@angular/router";

@Component({
    selector: 'app-table-customers',
    templateUrl: './table-customers.component.html',
    styleUrls: ['./table-customers.component.sass'],
})
export class TableCustomersComponent implements OnChanges, AfterViewInit {

    @Input() arrayCustomer = [];
    displayedColumns: string[] = ['id', 'name', 'age', 'city', 'actions'];
    data;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private dataDefault: DataDefault, public router: Router) {
    }

    ngOnChanges(changes: SimpleChanges){
        this.data = new MatTableDataSource<CustomerElement>(changes.arrayCustomer.currentValue)
        this.data.paginator = this.paginator
        this.data.sort = this.sort;
    }

    ngAfterViewInit() {
        this.data.paginator = this.paginator
        this.data.sort = this.sort;
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
