import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from "rxjs/internal/operators/catchError";
import {throwError} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class NetworkService {

    constructor(private http: HttpClient){
    }

    public get(url: string){
        return this.http.get(`${url}`).pipe(catchError(this.errorHandler));
    }

    public put(url: string, id: number, body: {}) {
        return this.http.put(`${url}/${id}/`, body).pipe(catchError(this.errorHandler));
    }

    private errorHandler(error: HttpErrorResponse) {
        let excecao
        try {
            if (error.error && error.error['error']) {
                excecao = error.error.error.message
            } else if(error.message) {
                excecao = error.message
            } else {
                excecao = JSON.stringify(error)
            }
        } catch (e) {
            excecao = 'Erro na requisição'
        }
        return throwError(excecao.toString().replace(/\\r/g, '\\n'))
    }


}