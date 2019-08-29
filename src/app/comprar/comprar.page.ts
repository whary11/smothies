import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ToastController, NavController } from '@ionic/angular';

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
  datos = {
    nombre:'',
    direccion:'',
    email:'',
    telefono:'',
    area:''
  }

  constructor(private router: Router,public _route: ActivatedRoute,public navCtrl: NavController, private afs: AngularFirestore, public toastController: ToastController) { 

    let id = this._route.snapshot.paramMap.get('id')
    this.itemsCollection = this.afs.collection('batidos', ref => {
      return ref.where('id' ,'==',  id)
    });
    this.batido = this.itemsCollection.valueChanges()
    // console.log(this.batido);
  }

  ngOnInit() {
    
    

  }

  async addPedido(){
    console.log(this.datos);
    if (this.datos.nombre != '' && this.datos.direccion != '' && this.datos.email != '' && this.datos.area != '') {
      this.itemsCollection = this.afs.collection('pedidos');
      // console.log( await this.itemsCollection.add(this.datos));
      const toast = await this.toastController.create({
        message: 'Se ha creado el pedido con éxito.',
        duration: 2000,
        color:'primary',
        position:'top'
      });
      toast.present();
      // this.navCtrl.goBack('/tabs/tab1');
      this.datos = {
        nombre:'',
        direccion:'',
        email:'',
        telefono:'',
        area:''
      }

      // this.navCtrl.back          
    }else{
      const toast = await this.toastController.create({
        message: 'Upps.. parece que falta información.',
        duration: 2000,
        color:'danger',
        position:'top'
      });
      toast.present();
    }
    
  }

}
