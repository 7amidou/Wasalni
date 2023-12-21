import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  



  user: Observable <any>
  isUser: boolean = false;
  constructor(private af:AngularFireAuth,private route:Router,private fa:AngularFireAuth)  { 
this.user=this.fa.user

    this.fa.user.subscribe(user=>{
if(user){
  this.isUser=true
}else{
  this.isUser=false
}
} )
}
  ngOnInit(): void {
  }

}
