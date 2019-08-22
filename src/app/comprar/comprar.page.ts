import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Btdo{
  id:String,
  name:String;
  description:String;
  img:String;
  price:Number;
  slug:String;
}

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.page.html',
  styleUrls: ['./comprar.page.scss'],
})
export class ComprarPage implements OnInit {

  itemsCollection: AngularFirestoreCollection <Btdo>;
  batido : Observable <Btdo[]>;

  constructor(public _route: ActivatedRoute, private afs: AngularFirestore) { 

    let id = this._route.snapshot.paramMap.get('id')
    this.itemsCollection = this.afs.collection('batidos', ref => {
      return ref.where('id' ,'==',  id)
    });
    this.batido = this.itemsCollection.valueChanges()
    console.log(this.batido);
  }

  ngOnInit() {
    
    

  }

}
