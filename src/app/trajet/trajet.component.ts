import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Service/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-trajet',
  templateUrl: './trajet.component.html',
  styleUrls: ['./trajet.component.css']
})
export class TrajetComponent implements OnInit {
dataArray: { id: string; dep: unknown; des: unknown; nbr: unknown; prix: unknown; date: unknown; uid: unknown; tele: unknown }[] | undefined
  constructor(private fs:AngularFirestore,private as:AuthService) { }




  



  ngOnInit(): void {
    this.fs.collection("trajets").valueChanges().subscribe((data) => {
      this.dataArray = data as any[];
    });
  }

}
