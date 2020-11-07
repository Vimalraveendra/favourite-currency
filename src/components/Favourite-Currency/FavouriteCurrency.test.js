import React from 'react';
import{shallow} from 'enzyme';
import FavouriteCurrency from './FavouriteCurrency'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
const mockStore = configureStore();
const store = mockStore();

const props={}

it("should render Favourite Currency  component  with default props and redux store", () => {
    let wrapper = shallow(
        <Provider store={store}>
        <FavouriteCurrency {...props}/>
        </Provider>
        );
    expect(wrapper).toMatchSnapshot();
  });