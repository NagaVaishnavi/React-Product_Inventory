import React from 'react';
import Product from './products/product';
import { Switch, Route } from "react-router-dom";
import Home from './home/home';
import Login from './login/login';
import Signup from './signup/signup';

class Content extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
            Content component!
            <Switch>
                <Route exact path='/' component={Home}></Route>    
                <Route path='/products' component={Product}></Route>
               <Route path='/login' component={Login}></Route>
               <Route path='/signup' component={Signup}></Route>
            </Switch>   
          
        </div>
         );
    }
}
 
export default Content;