import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios'
import Nav from '../../header/nav';
class Signup extends React.Component {
  


    state = {
        name: '',
        email: '',
        uid: '',
        pwd: '',
        cpwd: '',
        nameError: '',
        emailError: '',
        useridError: '',
        pwdError: 'default',
        cpwdError: '',
        buttonStatus: true


    }


    getName = (event) => {
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({ name: event.target.value })
        this.checkValidation()


    }


    getEmail = (event) => {
        this.setState({ email: event.target.value })
        this.checkValidation()
    }


    getUserId = (event) => {
        this.setState({ uid: event.target.value })
        this.checkValidation()
    }
    getPwd = (event) => {
        console.log(event.target.value)
        this.setState({ pwd: event.target.value })
        this.checkValidation()
    }


    getCpwd = (event) => {
        console.log(event.target.value)
        this.setState({ cpwd: event.target.value })
        this.checkValidation()
    }


    checkValidation = () => {


        if (this.state.name == "" || this.state.name.length < 4) {
            this.setState({ nameError: "please enter valid name", buttonStatus: true })
        }
        else {
            this.setState({ nameError: '', buttonStatus: false })
        }
        if (this.state.email == "" || !this.state.email.match('@gmail.com')) {
            this.setState({ emailError: 'please enter valid email', buttonStatus: true })
        }
        else {
            this.setState({ emailError: '', buttonStatus: false })
        }
        if (this.state.uid == "" || this.state.uid.length < 4) {
            this.setState({ useridError: 'please enter valid userid', buttonStatus: true })
        }
        else {
            this.setState({ useridError: '', buttonStatus: false })
        }
        if (this.state.pwd == '' || this.state.pwd.length <= 4) {
            this.setState({ pwdError: "please enter valid password", buttonStatus: true })
        }
        else {
            this.setState({ pwdError: '', buttonStatus: false })
        }


        
    }


    saveUser = () => {
        console.log("save user rendered..")


        let userDetails = {
            "id": this.state.uid,
            "Name": this.state.name,
            "Email": this.state.email,
            "Userid": this.state.uid,
            "Password": this.state.pwd,
            "ConfirmPassword": this.state.cpwd
        }
        console.log("userDetails:", userDetails)
        this.checkValidation()
        console.log(this.state.pwdError)
        
            Axios.post('http://localhost:3000/registerdetails', userDetails)
                .then(response => {
                    console.log(response)
                    console.log(this.props.history.push('/login'))
                }).catch(error => {
                    console.log(error)
                })
        
    }


    render() {
        return (

            <div>
       <div>
           <Nav></Nav>
       </div>
          <div className="c2" style={{width:'30%',align:'center',backgroundColor: '#4C516D', padding:'3% 3% 3% 3%',border: '3px solid #f1f1f1',margin: '30px 30% 0 35%'}}>
                <h2>REGISTER HERE.!!</h2>
                <form>
                    <p>Name </p>
                    <input type='text' id="name" onChange={this.getName} required></input><span >{this.state.nameError}</span>
                    <br></br>
                    <p>Emailid </p>
                    <input type='text' id="email" onChange={this.getEmail} required></input><span >{this.state.emailError}</span>
                    <br></br>
                    <p>UserName</p>
                    <input type="text" id="uid" onChange={this.getUserId} required></input><span >{this.state.useridError}</span>
                    <br></br>
                    <p>Password</p>
                    <input type="password" id="pwd" onChange={this.getPwd} required></input><span >{this.state.pwdError}</span>
                    <br></br>
                    <p>Confirm Password</p>
                    <input type="password" id="cpwd" onChange={this.getCpwd} required></input>
                    <br></br><br></br>
                    <button id="save" onClick={this.saveUser} disabled={this.state.buttonStatus} style={{backgroundcolor:'white', color:' black', border: '3px solid #f1f1f1',borderRadius:'20px',}}>SignUp</button>
                    <br></br><br></br>
                    <Link to='/login' id="reg" style={{color:'black'}}>Already a member,login here..</Link>
                </form>
            </div></div>
        );
    }


}
export default Signup;