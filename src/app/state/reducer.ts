import { Stats, DEFAULT_STAT } from './stats';
import { IAction,
    IChangeAgeAction,
    IChangeHeightAction,
    IChangeWeightAction,
    IChangeGenderAction,
    Actions } from './actions';

export function statReducer<T extends IAction>(state: Stats, action: T) {
    switch (action.type) {

        case Actions.ChangeAge:
            let ageAction = <IChangeAgeAction><any>action;
            return Object.assign(state, { ageYears: ageAction.age });

        case Actions.ChangeHeight:
            let heightAction = <IChangeHeightAction><any>action;
            return Object.assign(state, { heightInches: heightAction.height });

        case Actions.ChangeWeight:
            let weightAction = <IChangeWeightAction><any>action;
            return Object.assign(state, { weightPounds: weightAction.weight });

        case Actions.ChangeGender:
            let genderAction = <IChangeGenderAction><any>action;
            return Object.assign(state, { isFemale: genderAction.isFemale });

        default: {
            return Object.assign(new Stats(), DEFAULT_STAT);
        }
    }
};
