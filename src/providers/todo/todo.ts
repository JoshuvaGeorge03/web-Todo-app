
import { Injectable } from '@angular/core';
import{AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore'
import { TodoItem } from '../../model/item/item.model';

  /*Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoProvider {
  todo:AngularFirestoreCollection<TodoItem>;
  todoDoc:AngularFirestoreDocument<TodoItem>;

  constructor(private todofs:AngularFirestore) {
    this.todo=this.todofs.collection('Todo');
    console.log("collections list in firestore",this.todo);
   
    console.log('Hello TodoProvider Provider');
  }
  
  getTodo(){
    return this.todo;
  }
  addTodo(item:TodoItem){
    this.todo.add(item);
   // console.log("item id",item.id);
  }
  deleteTodo(item:TodoItem){
    this.todoDoc=this.todofs.doc(`Todo/${item.id}`);
    this.todoDoc.delete();
  }
  updateTodo(item:TodoItem){
    this.todoDoc=this.todofs.doc(`Todo/${item.id}`);
    this.todoDoc.update(item);
  }
}
