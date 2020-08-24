import React from 'react';
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {
    
    render() { 
        const menuitem = {
            color:"red",
            backgroundColor:"lightblue",
            display:'inline',
            padding:'18px 210px'
           
           
            
            
            
        }
        let imgStyle ={
            width:'60px',
            height:'40px',
           
            borderRadius:'10px'
        }


        return (  
            <div>
           
            
                <ul style={{listStyleType:'none'}}>
                   
                   
                    <li style={menuitem}>
                        <Link to="/dashboard" style={{ textDecoration:'none'}}>Dashboard</Link>
                        </li>
                        <li style={menuitem}>
                        <Link to="/products" style={{ textDecoration:'none'}}>Products</Link>
                    </li>
                   
                    <li style={menuitem}>
                        <Link to="/login" style={{ textDecoration:'none'}}>Signout</Link>
                    </li>
                </ul>
                
                </div>      

        );
    }
}
 
export default NavigationBar;