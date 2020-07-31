import React, {Dispatch } from 'react';


const writeToLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
}

function readFromLocalStorage(key: string, defaultValue: any) {
    let value = localStorage.getItem(key);

    if(value !== null){
        switch(key){
            case 'contractions':
                let contractions = JSON.parse(value, (key: string, value: string) => {
                    if(key === 'start' || key === 'end'){
                        return new Date(value);
                    } else {
                        return value;
                    }
                }) as IContraction[];
                return contractions;
            default:
                return JSON.parse(value);
        }
    } else {
        writeToLocalStorage(key, defaultValue);
    }

    return defaultValue;
}

const clearLocalStorage = () => {
    writeToLocalStorage('contractions', []);
    writeToLocalStorage('midContraction', false);
}

const initialState: IState = {
    contractions: readFromLocalStorage('contractions', []),
    midContraction: readFromLocalStorage('midContraction', false)
};

export const Store = React.createContext({} as IContext);

function reducer(state: IState, action: Action): IState {
    let contractions;
    switch(action.type){
        case 'CONTRACTION_START':
            let newid = state.contractions.length + 1;
            let c = {start: action.payload, id: newid};

            contractions = [...state.contractions, c].sort((a, b) => b.id - a.id);

            writeToLocalStorage('contractions', contractions);
            
            return {...state, contractions: contractions}

        case 'CONTRACTION_END':
            contractions = state.contractions.map(
                contraction => {
                    if(contraction.end === undefined){
                        return {...contraction, end: action.payload};
                    } else {
                        return contraction;
                    }
                }).sort((a, b) => b.id - a.id);

            writeToLocalStorage('contractions', contractions);
            
            return {...state, contractions: contractions}
        case 'TOGGLE_CONTRACTION':
            writeToLocalStorage('midContraction', !state.midContraction)
            return {...state, midContraction: !state.midContraction}
        case 'RESET_CONTRACTIONS':
            clearLocalStorage();
            return {...state, contractions: []};
        case 'RESET_MIDCONTRACTION':
            return {...state, midContraction: false}
        default:
            return state;
    }
}

interface IState{
    contractions: IContraction[];
    midContraction: Boolean;
}

export interface IContraction{ 
    id: number;
    start: Date;
    end?: Date;
}

type Action = 
            {type: 'CONTRACTION_START', payload: Date} |
            {type: 'CONTRACTION_END', payload: Date} |
            {type: 'TOGGLE_CONTRACTION'} |
            {type: 'RESET_CONTRACTIONS'} | 
            {type: 'RESET_MIDCONTRACTION'}

interface IContext{
    state: IState;
    dispatch: Dispatch<Action>;
}

export const StoreProvider:React.FunctionComponent = ({children}) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const value: IContext = {state, dispatch};
    return <Store.Provider value={value}>{children}</Store.Provider>
}