import React from 'react';
 import Content from './Content';

import ReactDOM from 'react-dom'
 
import { MemoryRouter as Router } from 'react-router-dom';

 
describe("all test for app component", ()=>{
  it('renders the component without crashing!', ()=>{
    const div = document.createElement('div')
    ReactDOM.render(<Router><Content></Content></Router>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
 
})