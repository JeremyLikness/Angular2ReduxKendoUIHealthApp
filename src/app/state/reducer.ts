import { Stats, DEFAULT_STAT } from './stats';
import { IAction,
    IChangeAgeAction,
    IChangeHeightAction,
    IChangeWeightAction,
    IChangeGenderAction,
    Actions } from './actions';

export function statReducer<T extends IAction>(state: Stats, action: T) {

    let newState = new Stats();

    switch (action.type) {

        case Actions.ChangeAge:
            let ageAction = <IChangeAgeAction><any>action;
            let newStat = Object.assign(newState, state, { ageYears: ageAction.age });
            newStat.bmrHistory = [...state.bmrHistory, newStat.bmr];
            return newStat;

        case Actions.ChangeHeight:
            let heightAction = <IChangeHeightAction><any>action;
            let newHeightStat = Object.assign(newState, state, { heightInches: heightAction.height });
            newHeightStat.bmrHistory = [...state.bmrHistory, newHeightStat.bmr];
            return newHeightStat;

        case Actions.ChangeWeight:
            let weightAction = <IChangeWeightAction><any>action;
            let newWeightStat = Object.assign(newState, state, { weightPounds: weightAction.weight });
            newWeightStat.bmrHistory = [...state.bmrHistory, newWeightStat.bmr];
            return newWeightStat;

        case Actions.ChangeGender:
            let genderAction = <IChangeGenderAction><any>action;
            let newGenderStat = Object.assign(newState, state, { isFemale: genderAction.isFemale });
            newGenderStat.bmrHistory = [...state.bmrHistory, newGenderStat.bmr];
            return newGenderStat;

        default: {
            return Object.assign(newState, DEFAULT_STAT);
        }
    }
};
