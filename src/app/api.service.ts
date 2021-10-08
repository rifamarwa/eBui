import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    //base api url
    public url = 'http://192.168.29.91:5002/api/v1/';
    public url2 = 'http://192.168.29.91:5006/api/v2/'

    constructor(public http:HttpClient) { }
  
  
    /*****************SERVICE AWAL*********************/
    //Mengambil semua data data
    getData(baseUrl:any)
    {
      return this.http.get(this.url+baseUrl);
    }
  
    //Mengambil 1 data data
    getSingleData(baseUrl:any, id:number){
      return this.http.get(this.url+baseUrl+"/"+id);
    }

    getMedia(baseUrl:any){
      return this.http.get(this.url+baseUrl)
    }
  
    createData(baseUrl:any, data:any){
      return this.http.post(this.url+baseUrl, data);
    }
  
    updateData(baseUrl:any, id:number, data:any){
      return this.http.put(this.url+baseUrl+"/"+id, data);
    }
  
    deleteData(baseUrl:any, id:number){
      return this.http.delete(this.url+baseUrl+"/"+id);
    }

    /**************SERVICE MENGGUNAKAN SEQUELIZE****************/
    getDataS(params:any, baseUrl:any): Observable<any> {
      return this.http.get(this.url2+baseUrl, { params });
    }
  
    getSingleDataS(baseUrl:any, id:number): Observable<any> {
      return this.http.get(`${this.url2+baseUrl}/${id}`);
    }
  
    createDataS(data:any,baseUrl:any): Observable<any> {
      return this.http.post(this.url2+baseUrl, data);
    }
  
    updateDataS(baseUrl:any, id:number, data:any): Observable<any> {
      return this.http.put(`${this.url2+baseUrl}/${id}`, data);
    }
  
    deleteDataS(id:number,baseUrl:any): Observable<any> {
      return this.http.delete(`${this.url2+baseUrl}/${id}`);
    }
  
    deleteAllDataS(baseUrl:any): Observable<any> {
      return this.http.delete(this.url2+baseUrl);
    }

  
}
