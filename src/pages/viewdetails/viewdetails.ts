import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TodoProvider } from '../../providers/todo/todo';
import { TodoItem } from '../../model/item/item.model';
/**
 * Generated class for the ViewdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-viewdetails',
  templateUrl: 'viewdetails.html',
})
export class ViewdetailsPage {
  todoItem:TodoItem=
  { 
    id:'',
    title:'',
  description :''
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private todoService:TodoProvider) {
    //this.item=this.navParams.get('item');
    this.todoItem.id=this.navParams.get('items').id;
    this.todoItem.title=this.navParams.get('items').title;
    this.todoItem.description=this.navParams.get('items').description;
    console.log("checking the obj",this.navParams.get('items'))
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad ViewdetailsPage');
  }
  
  updateTodo(todo){
   //updating todo list using firestore
    this.todoService.updateTodo(todo);
    console.log("object passed in update todo",todo);
    this.navCtrl.setRoot(HomePage);
  }
  delete(todo){
     //removing todo list using firestore
    console.log("item passed in deletetodo",name)
    this.todoService.deleteTodo(todo);
   
    this.navCtrl.setRoot(HomePage);

   // removing todo using storage service
   // console.log("is that key name",name)
   // this.navCtrl.setRoot(HomePage);
  }
}
