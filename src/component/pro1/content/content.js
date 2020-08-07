import React from 'react';
import Product from './products/product';
import { Switch, Route } from "react-router-dom";
import Home from './home/home';
import Login from './login/login';
import Signup from './signup/signup';
import Dashboard from './dashboard/dashboard';
import EditProduct from './editproduct';
import AddProduct from './addproduct';

class Content extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <Switch>
                <Route exact path='/' component={Home}></Route>    
                <Route path='/products' component={Product}></Route>
                <Route path='/dashboard' component={Dashboard}></Route>
               <Route path='/login' component={Login}></Route>
               <Route path='/signup' component={Signup}></Route>
               <Route path='/addproduct' component={AddProduct}></Route>
               <Route path='/editproduct' component={EditProduct}></Route>
               
            </Switch>   
          
        </div>
         );
    }
}
 
export default Content;