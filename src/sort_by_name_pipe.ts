import {Pipe} from 'angular2/core';

@Pipe({
  name: 'sortByName',
  pure: false
})
export class SortByNamePipe {
  temp = [];
  // i = 0;
  transform (value, [queryString]) {
    // console.log(this.i++);
    // console.log(value, queryString);
    
    // // This does not work
    // this.temp = value.filter((student)=>(student)=>student.name.includes(queryString)))
    // return value.map(function(val){ return val.name.toUpperCase()});
    
    // This works
    this.temp.length = 0;
    this.temp.push(...value.filter((student)=>student.name.includes(queryString)))
    return this.temp;
  }
}
