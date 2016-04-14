import { Component, OnInit } from 'angular2/core';
import {  ROUTER_DIRECTIVES } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import { IToDoItem } from './todo-item';
import { ToDoListService } from './todo-list.service';


@Component({
    templateUrl: 'app/todo/todo-list.component.html',
    styleUrls: ['app/todo/todo-list.component.css'],
    directives: [ ROUTER_DIRECTIVES]
})
export class ToDoList implements OnInit{
    
    headerFontSize: number = 24;
    toDoList: IToDoItem[];
    
    constructor(private _todoService: ToDoListService) {
    }
    
    
    ngOnInit(): void{
        this._todoService.getToDos().subscribe( items => this.toDoList = items);
    }
    
}