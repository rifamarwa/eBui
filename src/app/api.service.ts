import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    //base api url
    // public url = 'http://localhost:5000/api/v1/';
    public url = 'http://192.168.29.91:5002/api/v1/';
    constructor(public http:HttpClient) { }
  
  
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

  
}
