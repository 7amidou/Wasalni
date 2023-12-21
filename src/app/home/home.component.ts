import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchTerm: string = '';

  @Output() searchEvent = new EventEmitter<string>();
searchResults: any;

  search() {
    this.searchEvent.emit(this.searchTerm);
  }




  constructor(private firestore: AngularFirestore) { }



  performSearch(searchTerm: string) {
    this.firestore.collection('trajets', ref => ref
      .where('des', '>=', searchTerm)
      .where('date', '<=', searchTerm + '\uf8ff'))
      .valueChanges().subscribe((results) => {
        this.searchResults = results;
      });

    }




  ngOnInit(): void {
  }

}
