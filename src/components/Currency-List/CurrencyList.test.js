import React from 'react';
import{shallow} from 'enzyme';
import CurrencyList from './CurrencyList';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
const mockStore = configureStore();
const store = mockStore();



it("should render Currency component  with default props and redux store", () => {
    let wrapper = shallow(
        <Provider store={store}>
        <CurrencyList/>
        </Provider>
        );
    expect(wrapper).toMatchSnapshot();
  });