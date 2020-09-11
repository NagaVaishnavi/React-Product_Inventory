import React from 'react';
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {
    
    render() { 
        const menuitem = {
            color:"red",
            height:'50%',
            display:'inline',
             padding:'18px 210px',
            // width:'100%',
            margin:'auto',
            
           
            }
        
            // list-style-type: none;
            // display: flex;
            // justify-content: space-evenly;
            // flex-wrap: wrap;
            // margin:0;
            // padding:0

        return (  
            <div>
           
            <div style={{width:'100%',backgroundColor:"grey", padding:'8px',}}>
                <ul style={{listStyleType:'none', justifycontent:'space-evenly'}}>
                   
                   
                    <li style={menuitem}>
                        <Link to="/dashboard" style={{ textDecoration:'none',float:'left',fontSize:'25px',color:'black'}}>Product Inventory</Link>
                        </li>
                        
                   
                    <li style={menuitem}>
                        <Link to="/login" style={{ textDecoration:'none',float:'right',fontSize:'25px',marginRight:'2%',color:'black'}}>Signout</Link>
                    </li>
                </ul>
                
                </div>      
</div>
        );
    }
}
 
export default NavigationBar;