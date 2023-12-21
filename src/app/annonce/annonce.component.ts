import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../Service/auth.service';
@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
  Uid: any
  successMessage: string | undefined
  constructor(private fs:AngularFirestore,private as:AuthService) { 
    this.as.user.subscribe(user=> {
this.Uid=user.uid
    })
  }




  ngOnInit(): void {
    
  }



  addtrajet(e: { value: any; }){
    console.log(e.value)
let data=e.value
this.fs.collection("trajets").add({
  
dep:data.dep,
des:data.des,
nbr:data.nbr,
prix:data.prix,
date:data.date,
tele:data.tele,
uid:this.Uid
}).then(()=>{
this.successMessage='Publication Avec Success'
console.log("done")
})

  }

}
