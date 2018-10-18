import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipe implements PipeTransform {
  transform(value: any): string {
    return 'Hello ' + value;
  }
}




