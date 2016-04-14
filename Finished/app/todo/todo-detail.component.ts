import { Component, OnInit } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';

import { IToDoItem } from './todo-item';
import { ToDoListService } from './todo-list.service';

@Component({
    templateUrl: 'app/todo/todo-detail.component.html'
})
export class ToDoDetail implements OnInit{
    toDoItem :IToDoItem;
    errorMessage: string;
    
    constructor(private _todoService: ToDoListService,
        private _router: Router,
        private _routeParams: RouteParams
    ) { }
    
    ngOnInit() {
        if (!this.toDoItem) {
            let id = +this._routeParams.get('id');
            this.getItem(id);
        }
    }
    getItem(id: number) {
        this._todoService.getToDo(id)
            .subscribe(
            todos => this.toDoItem = todos,
            error => this.errorMessage = <any>error);
    }
    
    onBack(): void {
        this._router.navigate(['ToDos']);
    }
    
}