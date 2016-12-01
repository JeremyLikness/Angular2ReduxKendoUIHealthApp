import { ITargetHeartRate, IStats, bmiEquation, bmrMan, bmrWoman, thr } from './formulas';

export interface IValues {
    bmi: number;
    bmr: number;
    thr: ITargetHeartRate;
}

export class Stats implements IStats, IValues {

    public isFemale: boolean;
    public heightInches: number;
    public weightPounds: number;
    public ageYears: number;
    public bmrHistory: number[] = [];

    public get isMale(): boolean {
        return !this.isFemale;
    }

    public get bmi(): number {
        return bmiEquation(this);
    }

    public get bmr(): number {
        return this.isFemale ? bmrWoman(this) : bmrMan(this);
    }

    public get thr(): ITargetHeartRate {
        return thr(this.ageYears);
    }
}

let stat = new Stats();

// this may or may not be based on someone's actual stats
stat.ageYears = 42;
stat.heightInches = 70;
stat.weightPounds = 215;
stat.isFemale = false;
stat.bmrHistory = [stat.bmr];

export const DEFAULT_STAT: IStats = stat;

