import { Component } from '@angular/core';
import {  NavController, NavParams, ViewController } from 'ionic-angular';
import { TodoProvider } from '../../providers/todo/todo';
//import { HomePage } from '../home/home';

/**
 * Generated class for the AdditemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-additem',
  templateUrl: 'additem.html',
})
export class AdditemPage {
  
  title: any;
  description: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController ,private todoService:TodoProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdditemPage');
  } 
  saveItem(){
    let newTodo={
      title: this.title,
      description: this.description
    };
    this.viewCtrl.dismiss(newTodo);
    console.log("object passed for saving",newTodo)
    //this.navCtrl.setRoot(HomePage);
  }
  close(){
    this.viewCtrl.dismiss();
  }
}
