import React from 'react';
 

import ReactDOM from 'react-dom'
 
import { MemoryRouter as Router } from 'react-router-dom';

import Signup from './signup';
 
describe("all test for app component", ()=>{
  it('renders the component without crashing!', ()=>{
    const div = document.createElement('div')
    ReactDOM.render(<Router><Signup></Signup></Router>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
 
})