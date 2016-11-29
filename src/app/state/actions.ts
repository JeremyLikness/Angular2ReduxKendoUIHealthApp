export interface IAction {
    type: Actions;
}

export interface IChangeAgeAction extends IAction {
    age: number;
}

export interface IChangeHeightAction extends IAction {
    height: number;
}

export interface IChangeWeightAction extends IAction {
    weight: number;
}

export interface IChangeGenderAction extends IAction {
    isFemale: boolean;
}

export enum Actions {
    ChangeAge,
    ChangeHeight,
    ChangeWeight,
    ChangeGender
}

export const changeAge = (age: number) => ({
    type: Actions.ChangeAge,
    age: age
} as IChangeAgeAction);

export const changeHeight = (height: number) => ({
    type: Actions.ChangeHeight,
    height: height
} as IChangeHeightAction);

export const changeWeight = (weight: number) => ({
    type: Actions.ChangeWeight,
    weight: weight
} as IChangeWeightAction);

export const changeGender = (isFemale: boolean) => ({
    type: Actions.ChangeGender,
    isFemale: isFemale
} as IChangeGenderAction);

