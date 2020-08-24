import React from 'react';
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {
    
    render() { 
        const menuitem = {
            color:"red",
            backgroundColor:"lightblue",
            display:'inline',
            padding:'18px 675px'
           
           
            
            
            
        }
        let imgStyle ={
            width:'86px',
            height:'40px',
          
            borderRadius:'10px'
        }


        return (  
            <div>
           
            
                <ul style={{listStyleType:'none'}}>
                    <li style={menuitem}>
                       <img src="images/logoimage2.jpg" alt="Logo" style={imgStyle}></img>
                    </li>
                   
                   
                   
                </ul>
                
                </div>      

        );
    }
}
 
export default NavigationBar;