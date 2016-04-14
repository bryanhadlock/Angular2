System.register(['angular2/core', 'angular2/router', './todo-list.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, todo_list_service_1;
    var ToDoList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (todo_list_service_1_1) {
                todo_list_service_1 = todo_list_service_1_1;
            }],
        execute: function() {
            ToDoList = (function () {
                function ToDoList(_todoService) {
                    this._todoService = _todoService;
                    this.headerFontSize = 24;
                }
                ToDoList.prototype.ngOnInit = function () {
                    var _this = this;
                    this._todoService.getToDos().subscribe(function (items) { return _this.toDoList = items; });
                };
                ToDoList = __decorate([
                    core_1.Component({
                        templateUrl: 'app/todo/todo-list.component.html',
                        styleUrls: ['app/todo/todo-list.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [todo_list_service_1.ToDoListService])
                ], ToDoList);
                return ToDoList;
            }());
            exports_1("ToDoList", ToDoList);
        }
    }
});
//# sourceMappingURL=todo-list.component.js.map