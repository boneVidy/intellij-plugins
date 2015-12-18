import {Component, View} from 'angular2/angular2';
import {EventEmitter} from "events";

@Component({selector: 'todo-cmp'})
class TodoCmp {
    model;
    complete = new EventEmitter(); // TypeScript supports initializing fields

    onCompletedButton() {
        this.complete.emit("completed"); // this fires an event
    }
}
