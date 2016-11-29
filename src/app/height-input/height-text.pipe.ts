import { Pipe, PipeTransform } from '@angular/core';

const inchesPerFoot = 12;

@Pipe({
  name: 'heightText'
})
export class HeightTextPipe implements PipeTransform {

  transform(value: number): any {
    if (value < 1) {
      return '???';
    }
    let feet = Math.floor(value / inchesPerFoot);
    let inches = value % inchesPerFoot; 
    if (feet) {
      return feet + ' ft. ' + inches +  ' in.';
    }
    return inches + ' in.';
  }

}
