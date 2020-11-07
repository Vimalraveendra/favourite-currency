import React from 'react';
import{shallow} from 'enzyme';
import FavouriteList from './FavouriteList';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
const mockStore = configureStore();
const store = mockStore();

const props={
    currencies:['USD'],
  currency:'EUR',
  isOpen:false

}

it("should render Favourite Currency  component  with default props and redux store", () => {
    let wrapper = shallow(
        <Provider store={store}>
        <FavouriteList {...props}/>
        </Provider>
        );
    expect(wrapper).toMatchSnapshot();
  });