import { Component, OnInit } from '@angular/core';
import{Http,Response} from '@angular/http';

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.css']
})
export class SimpleHttpComponent implements OnInit {
data:object;
loading:boolean;
  constructor(private http:Http) { }

  ngOnInit() {
  }
makeRequest():void{
this.loading=true; //loading indication to view
this.http.request('https://jsonplaceholder.typicode.com/posts/1').subscribe((res:Response)=>{
  this.data=res.json(); // respones as object using JSON
  this.loading=false;
})
}
}
