import React from 'react';
import { Link } from 'react-router-dom';


class NavigationBar extends React.Component {
    
    render() { 
        const menuitem = {
            color:"red",
            backgroundColor:"pink",
            display:'inline',
            padding: '10px',
            margin: '5px'
            
        }


        return (  
            <span>
                <ul style={{listStyleType:'none'}}>
                    <li style={menuitem}>
                        <Link to="/" style={{ textDecoration:'none'}}>Home</Link>
                    </li>
                    <li style={menuitem}>
                        <Link to="/products" style={{ textDecoration:'none'}}>Products</Link>
                    </li>
                    <li style={menuitem}>
                        <Link to="/dashboard" style={{ textDecoration:'none'}}>Dashboard</Link>
                        </li>
                    <li style={menuitem}>
                        <Link to="/login" style={{ textDecoration:'none'}}>login</Link>
                    </li>
                    <li style={menuitem}>
                        <Link to="/signup" style={{ textDecoration:'none'}}>Signup</Link>
                    </li>
                </ul>
            </span>

        );
    }
}
 
export default NavigationBar;