import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './views/Home';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';


it('renders without crashing', () => {
  shallow(<Home />);
});

