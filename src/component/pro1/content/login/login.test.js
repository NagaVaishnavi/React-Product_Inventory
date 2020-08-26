import React from 'react';
 

import ReactDOM from 'react-dom'
 
import { MemoryRouter as Router } from 'react-router-dom';
import Login from './login';
 
describe("all test for app component", ()=>{
  it('renders the component without crashing!', ()=>{
    const div = document.createElement('div')
    ReactDOM.render(<Router><Login></Login></Router>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
 
})