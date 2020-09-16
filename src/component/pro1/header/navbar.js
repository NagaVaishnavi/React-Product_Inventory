import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class NavigationBar extends React.Component {
    
    render() { 
        const menuitem = {
            
            height:'50%',
            display:'inline',
              padding:'18px 210px',
            width:'auto'
           
            }
        
           

        return (  
            <div>
           <nav className="a1">
            {/* <div style={{width:'99%',backgroundColor:"grey", padding:'8px',}}> */}
                <ul style={{listStyleType:'none',display:'flex',justifyContent:'space-evenly',flexWrap:'wrap',margin:0,padding:0}}>
                   
                   
                    <li className="a2">
                        <Link to="/dashboard" style={{ textDecoration:'none',fontSize:'25px',color:'black'}}>Dashboard</Link>
                        </li>
                        <li className="a2">
                        <Link to="/products" style={{ textDecoration:'none',fontSize:'25px',color:'black'}}>Products</Link>
                    </li>
                   
                    <li className="a2">
                        <Link to="/login" style={{ textDecoration:'none',fontSize:'25px',color:'black'}}>Signout</Link>
                    </li>
                </ul>
                
                {/* </div>     */}
                </nav>  
</div>
        );
    }
}
 
export default NavigationBar;