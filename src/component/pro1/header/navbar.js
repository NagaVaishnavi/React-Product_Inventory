import React from 'react';
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {
    
    render() { 
        const menuitem = {
            color:"red",
            backgroundColor:"lightblue",
            display:'inline',
            padding:'18px 150px'
           
           
            
            
            
        }
        let imgStyle ={
            width:'70px',
            height:'40px',
           
            borderRadius:'10px'
        }


        return (  
            <div>
           
            
                <ul style={{listStyleType:'none'}}>
                    <li style={menuitem}>
                       <img src="images/logoimage2.jpg" alt="Logo" style={imgStyle}></img>
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
                
                </div>      

        );
    }
}
 
export default NavigationBar;