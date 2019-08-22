import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';

interface Item{
  id:String,
  name:String;
  description:String;
  img:String;
  price:Number;
  slug:String;
}


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  private itemsCollection: AngularFirestoreCollection <Item>;
  items: Observable<Item[]>;
  constructor(public navCtrl: NavController, private afs: AngularFirestore, private router: Router) {}
  
  ionViewDidEnter(){
    this.itemsCollection = this.afs.collection('batidos');
    this.items = this.itemsCollection.valueChanges();
    console.log(this.items);

  }

  
  

}
