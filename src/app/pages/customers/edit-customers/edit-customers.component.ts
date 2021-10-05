import {Component, OnInit} from '@angular/core';
import {DataDefault} from '../../../services/data-default.service';
import {URL_PUT_CUSTOMERS} from '../../../controller/staticValues';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { NetworkService } from '../../../services/network.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
    selector: 'app-edit-customers',
    templateUrl: './edit-customers.component.html',
    styleUrls: ['./edit-customers.component.sass']
})
export class EditCustomersComponent implements OnInit {

    customerForm;
    validatorAge = true;

    constructor(private dataDefault: DataDefault, private formBuilder: FormBuilder, private router: Router, private networkService: NetworkService, private snackBar: MatSnackBar) {
    }

    ngOnInit(){
        this.dataDefault.objectCustomer.asObservable().subscribe((value: any) => {
            this.customerForm = this.formBuilder.group({
                id: [value.id],
                name: [value.name],
                age: [value.age, [Validators.minLength(1), Validators.maxLength(3), Validators.min(1)]],
                city: [value.city]
            });
        })
    }

    cancelar() {
        this.router.navigate(['customers'])
    }

    save() {
        if (this.customerForm.invalid) {
            return;
        }

        let data = this.customerForm.value;
        this.networkService.put(URL_PUT_CUSTOMERS, data.id, data).subscribe(v => {
            this.snackBar.open(`Cliente ${data.name} atualizado com sucesso!`, 'Fechar');
            this.router.navigate(['customers'])
        })
    }

    validator(event) {
        this.validatorAge = (!isNaN(parseInt(event)) && isFinite(event) && Number(event) > 0 && event.length < 4);
    }
}