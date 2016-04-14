import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { IToDoItem } from './todo/todo-item';
import { ToDoListService } from './todo/todo-list.service';
import { ToDoList } from './todo/todo-list.component';
import { ToDoDetail } from './todo/todo-detail.component';

@Component({
    selector: 'to-do-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [ToDoListService,
        HTTP_PROVIDERS,
        ROUTER_PROVIDERS]
})
@RouteConfig([
    { path: '/todos', name: 'ToDos', component: ToDoList, useAsDefault: true },
    { path: '/item/:id', name: 'Item', component: ToDoDetail }
])
export class AppComponent {
    title: string = 'To Do List';

}