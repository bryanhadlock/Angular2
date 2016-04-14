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
    var ToDoDetail;
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
            ToDoDetail = (function () {
                function ToDoDetail(_todoService, _router, _routeParams) {
                    this._todoService = _todoService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                }
                ToDoDetail.prototype.ngOnInit = function () {
                    if (!this.toDoItem) {
                        var id = +this._routeParams.get('id');
                        this.getItem(id);
                    }
                };
                ToDoDetail.prototype.getItem = function (id) {
                    var _this = this;
                    this._todoService.getToDo(id)
                        .subscribe(function (todos) { return _this.toDoItem = todos; }, function (error) { return _this.errorMessage = error; });
                };
                ToDoDetail.prototype.onBack = function () {
                    this._router.navigate(['ToDos']);
                };
                ToDoDetail = __decorate([
                    core_1.Component({
                        templateUrl: 'app/todo/todo-detail.component.html'
                    }), 
                    __metadata('design:paramtypes', [todo_list_service_1.ToDoListService, router_1.Router, router_1.RouteParams])
                ], ToDoDetail);
                return ToDoDetail;
            }());
            exports_1("ToDoDetail", ToDoDetail);
        }
    }
});
//# sourceMappingURL=todo-detail.component.js.map