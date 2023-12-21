import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export default class SignupComponent implements OnInit {
  constructor(private fa:AngularFireAuth) { }

  ngOnInit(): void {
  }


  signup(e: { value: any; }){
    //console.log(e.value)
    let data=e.value
    this.fa.createUserWithEmailAndPassword(data.email,data.password).then(()=>{
      console.log("done")
      alert("Compte Créer Avec Succes")
    }).catch(()=>{
      console.log("error")
      alert("Données erronée")
    })
      
    }
  }


