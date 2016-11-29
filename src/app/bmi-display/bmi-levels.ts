export interface IBmiFn { (bmi: number): boolean; };
export const Obese: IBmiFn = (bmi: number) => bmi >= 30.0;
export const Overweight: IBmiFn = (bmi: number) => bmi >= 25.0;
export const Underweight: IBmiFn = (bmi: number) => bmi < 18.5;
