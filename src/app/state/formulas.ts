export interface ITargetHeartRate {
    min: number;
    max: number;
}

export interface IStats {
    isFemale: boolean;
    isMale: boolean;
    heightInches: number;
    weightPounds: number;
    ageYears: number;
    bmrHistory: number[];
}

export const bmiEquation = (stats: IStats) => {
    let bmi = (stats.weightPounds * 703) / (stats.heightInches * stats.heightInches);
    return Math.round(bmi * 10.0) / 10.0;
};

export const bmrMan = (stats: IStats) =>
    Math.floor(66 + (6.23 * stats.weightPounds) + (12.7 * stats.heightInches) - (6.8 * stats.ageYears));

export const bmrWoman = (stats: IStats) =>
    Math.floor(655 + (4.35 * stats.weightPounds) + (4.7 * stats.heightInches) - (4.7 * stats.ageYears));

export const thr = (age: number) => {

    let max = 220.0 - age;

    return {
        min: Math.round(5.0 * max) / 10.0,
        max: Math.round(8.5 * max) / 10.0
    };
};
