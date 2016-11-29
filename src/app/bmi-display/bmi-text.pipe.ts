import { Pipe, PipeTransform } from '@angular/core';

import {Obese, Overweight, Underweight} from './bmi-levels';

@Pipe({
  name: 'bmiText'
})
export class BmiTextPipe implements PipeTransform {

  transform(value: number): any {
    let bmi = Number(value);

    if (Obese(bmi)) {
      return 'Obese';
    }

    if (Overweight(bmi)) {
      return 'Overweight';
    }

    if (Underweight(bmi)) {
      return 'Underweight';
    }

    return 'Normal';

  }

}
