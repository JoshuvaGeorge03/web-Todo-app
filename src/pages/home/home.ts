import { Component } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';
import { AdditemPage } from '../additem/additem';
import { ViewdetailsPage } from '../viewdetails/viewdetails';
import { TodoItem } from '../../model/item/item.model';
import { TodoProvider } from '../../providers/todo/todo';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items:Observable<TodoItem[]>;
  //todo:string;
  constructor(public navCtrl: NavController, private modal: ModalController,private todoService:TodoProvider) {
    //displaying todo from cloud firestore
   this.items= this.todoService.getTodo().snapshotChanges().map((changes)=>{
      return changes.map(data=>{
        const output=data.payload.doc.data();
        output.id=data.payload.doc.id;
       // console.log("output id",output)
        return output;
      })
    })
    console.log("this is updating");
   
  }
  

  addItem(){
    let modal=this.modal.create(AdditemPage);
    modal.onDidDismiss((todo)=>{
      if(todo){
        this.saveItem(todo);
      }
    });
    modal.present();
  }

  viewItem(item){
    this.navCtrl.push(ViewdetailsPage,{
    items:item
   })
    console.log("object passed to viewdetails",item);
  }
  saveItem(newitem){
    //storing values in cloud firestore
    this.todoService.addTodo(newitem);
    //storing values using storage service
  // this.storageService.set(newitem.title,this.items);
  }

  delete(item,event){
    this.todoService.deleteTodo(item);
    console.log("event in homepage delete todo",event);
  }
}
 //displaying items from local storage using storage service 
  /*  
    this.storageService.forEach((key,index)=>{
      console.log("index",index)
      this.items=key;
    });*/
