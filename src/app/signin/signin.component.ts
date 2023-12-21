import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
/*email:string;*/

  constructor(private fa:AngularFireAuth,private route:Router) { }

  ngOnInit(): void {
  }
signin(r: { value: any; }){
  let data=r.value
  this.fa.signInWithEmailAndPassword(data.email,data.password)
  .then(()=>{
    this.route.navigate(['/home'])
    console.log("login")
    alert("Connexion Réssuite")
  })
    

  .catch(()=>{
    console.log("error")
    alert("Erreur de connexion")
  })
   
  


/*
  forgotPassword(){
    this.fa.sendPasswordResetEmail(email).then(()=>{
this.route.navigate(['/varify-email']);
    },err=>{
      alert('erreur forgot')
    })


    }
    */
    
    
  }

}

