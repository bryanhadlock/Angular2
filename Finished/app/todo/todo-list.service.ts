import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';


import { IToDoItem } from './todo-item';

@Injectable()
export class ToDoListService {
    private _todoUrl = 'api/todo.json';
    toDoList: IToDoItem[];
    
    constructor(private _http: Http) { }
    
    getToDos(): Observable<IToDoItem[]> {
        return this._http.get(this._todoUrl)
            .map((response: Response) => <IToDoItem[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }
    getToDo(id: number): Observable<IToDoItem> {
      
        return this.getToDos()
            .map((todos: IToDoItem[]) => todos.find(p => p.id === id));       
 
    }
    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || "Server Error");
    }
    
    
}

