import React from 'react';
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {
    
    render() { 
        const menuitem = {
            color:"white",
            height:'50%',
            display:'inline',
             padding:'18px 210px',
            // width:'100%',
           
           
            }
        
            // list-style-type: none;
            // display: flex;
            // justify-content: space-evenly;
            // flex-wrap: wrap;
            // margin:0;
            // padding:0

        return (  
            <div>
           
            <div style={{width:'99%',backgroundColor:"grey", padding:'8px',}}>
                <ul style={{listStyleType:'none', justifycontent:'space-evenly'}}>
                   
                   
                    <li style={menuitem}>
                        <Link to="/dashboard" style={{ textDecoration:'none',fontSize:'25px',color:'black'}}>Dashboard</Link>
                        </li>
                        <li style={menuitem}>
                        <Link to="/products" style={{ textDecoration:'none',fontSize:'25px',color:'black'}}>Products</Link>
                    </li>
                   
                    <li style={menuitem}>
                        <Link to="/login" style={{ textDecoration:'none',fontSize:'25px',color:'black'}}>Signout</Link>
                    </li>
                </ul>
                
                </div>      
</div>
        );
    }
}
 
export default NavigationBar;