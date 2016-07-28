import {Component,
  ChangeDetectionStrategy,
  EventEmitter
} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {SortByNamePipe} from './sort_by_name_pipe.ts';


@Component({
  selector: 'hello-world',
  templateUrl: 'sites/all/modules/custom/hms_search_name_directory/src/hello_world.html',
  pipes: [SortByNamePipe],
  directives: [NgFor],
  events: ['studentChange'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloWorld {
  students : string[];
  studentChange = new EventEmitter();
  constructor() {
    this.students = [{
      name: 'Son'
    },{
      name: 'David'
    }]
  }
  
  addNewStudent(studentName: string){
    this.students.push({
      name: studentName
    });
    console.log(this.students);
  }
  
  sayHi (){
    console.log('Hi');
  }
  
}
