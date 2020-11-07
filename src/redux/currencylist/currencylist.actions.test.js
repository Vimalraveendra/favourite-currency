import currencyListActionTypes from "./currencylist.type";
import * as actions from './currencylist.actions'

import configureStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk';

const mockStore = configureStore([thunkMiddleware])

describe('Handle Change', () => {
     it('should create an  action to handleChange', () => {
         const text = "EUR"
         const expectedAction={
            type: currencyListActionTypes.HANDLE_CHANGE,
            payload:text
         }
         expect(actions.handleChange(text)).toEqual(expectedAction)
     });
});

describe('request Currency', () => {
    
   
    it('should handles request currency start API', () => {
        const store = mockStore();
      
        store.dispatch(actions.requestCurrencyStart())
        const action = store.getActions();
        
        const expectedAction={
           type: currencyListActionTypes.REQUEST_RATES_PENDING
           
        }
        expect(action[0]).toEqual(expectedAction)
    });

    it('should handles request currency success API', () => {
        const payload=['USD'];
        const store = mockStore({});
        store.dispatch(actions.requestCurrencySuccess(payload));
        const action = store.getActions();
    
        const expectedAction={
           type: currencyListActionTypes.REQUEST_RATES_SUCCESS,
           payload:["USD",] 
        }
        expect(action[0]).toEqual(expectedAction)
    });

    it('should handles request currency failure API', () => {
        const payload='something went wrong!!!'
        const store = mockStore({});
        store.dispatch(actions.requestCurrencyFailure(payload));
        const action = store.getActions();
    
        const expectedAction={
           type: currencyListActionTypes.REQUEST_RATES_FAILED,
           payload:'something went wrong!!!'
        }
        expect(action[0]).toEqual(expectedAction)
    });
    
});