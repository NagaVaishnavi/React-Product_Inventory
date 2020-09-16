import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios'
import Nav from '../../header/nav';
import './login.css';
class Login extends React.Component {
  constructor(props){
  super(props)
  this.state = { 
    uname:'',
    pwd:'',
    users:[],
    msgResponse:'',
    pwdResponse:'',
    buttonStatus: false
 }
}

 checkValidation=()=>{
       
  let nameerror = ''
  //let sinceerror = ''
  if(this.state.uname.includes('#')){
      console.log('name having #!');
      nameerror = 'name having invalid #'
  }
  if(this.state.uname.includes('$')){
      console.log('name having $!');
      nameerror = 'name having invalid $'
  }
  //check for other conditions!
  if(nameerror){
      console.log('set state for nameError');
      this.setState({
           nameError: nameerror,
           buttonStatus: true
       })
      
      return false
  }

  this.setState({
      nameError:'',
      buttonStatus:false
   })
  return true
}

 

 getUname=(event)=>{
     console.log(event.target.value)
     this.checkValidation()
     this.setState({uname:event.target.value})
     this.checkValidation()
 }



 getPwd=(event)=>{
    console.log(event.target.value)
    this.setState({pwd:event.target.value})
}
// componentWillMount() {
//     this.checkLogin()
// }



checkLogin = () => {
    console.log("check login rendered..")
    
    Axios.get('http://localhost:3000/registerdetails')
        .then(response => {
            console.log(response.data)
            this.setState({ users: response.data })
            if(this.state.users.map(user=>{
                if(user.Userid == this.state.uname){
                    if(user.Password == this.state.pwd){
                        console.log("login success..!!")
                        this.setState({msgResponse:"login success"})
                        this.props.history.push('/products')
                    }
                    else{
                        console.log("enter valid password....")
                        this.setState({pwdResponse:"enter valid password...."})
                    }
                }
                else{
                    console.log("enter valid credentials..")
                    this.setState({msgResponse:"enter valid credentials.."})
                }
                
            }));
            
            console.log("msgResponse:",this.state.msgResponse)
            
        }).catch(error => {
            console.log(error)
        })
        console.log("this.state.users:",this.state.users)
}

render() { 
    return ( 
        <div>
       <div>
           <Nav></Nav>
       </div>
      <div className="c2" style={{width:'20%',align:'center',backgroundColor: '#4C516D', padding:'3% 3% 3% 3%',border: '3px solid #f1f1f1',margin: '5% 0 0 38%'}}>

        <h1>LOGIN FORM</h1>
       
            <p>Username</p>
            <input type="text" id="uname"  onChange={this.getUname} placeholder="Enter username"></input><br></br>
            <p>Password</p>
            <input type="password" id="pwd" onChange={this.getPwd} placeholder="enter password"></input><br></br>
            <br></br>
            <button onClick={this.checkLogin} id="login" style={{backgroundcolor:'white', color:' black', borderRadius:'20px',border: '2px solid grey',padding: '8px 30px'}}>Login</button><span >{this.state.msgResponse} </span>
            {/* <span >{this.state.pwdResponse}</span> */}
            <br></br><br></br>
            <Link to='/signup' id="reg"style={{color:'black'}}>Don't have an account?,signup here</Link>
                
       
        </div>
        </div>
       
     );
}
}
 
export default Login ;