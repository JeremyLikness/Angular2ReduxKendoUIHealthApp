import { Action, Dispatch, Middleware, Store } from 'redux';
import { Stats } from './stats';
import { IAction,
    Actions,
    IChangeAgeAction,
    IChangeGenderAction,
    IChangeHeightAction,
    IChangeWeightAction } from './actions';

interface IPayload {
    description: string;
    value: string;
}

interface IFnResolve { (action: IAction): IPayload; };

interface IResolver { [type: number]: IFnResolve; };

const resolver: IResolver = {};
resolver[Actions.ChangeAge] = (action: IAction) => ({
        description: 'change age',
        value: (<IChangeAgeAction>action).age.toString()
    });
resolver[Actions.ChangeGender] = (action: IAction) => ({
        description: 'change gender',
        value: (<IChangeGenderAction>action).isFemale ? 'female' : 'male'
    });
resolver[Actions.ChangeHeight] = (action: IAction) => ({
        description: 'change height',
        value: (<IChangeHeightAction>action).height.toString()
    });
resolver[Actions.ChangeWeight] = (action: IAction) => ({
        description: 'change weight',
        value: (<IChangeWeightAction>action).weight.toString()
    });

export const loggingMiddleware: Middleware =
    (store: Store<Stats>) =>
    (next: Dispatch<Stats>) =>
    (action: Action) => {
        let logDetails = resolver[action.type](action);
        console.log('dispatched: ' + logDetails.description, logDetails.value);
        return next(action);
    };
