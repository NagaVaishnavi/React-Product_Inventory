import React from 'react';


class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '', 
          age: null,
        };
      }
      myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }
      render() {
        return (
          <div className="c2" style={{width:'30%',align:'center',backgroundColor: 'lightblue', padding:'3% 3% 3% 3%',border: '3px solid #f1f1f1',margin: '30px 30% 0 35%'}}>
    <h1>Signup form</h1>
          <p>Enter your name:</p>
          <input
            type='text'
            name='username'
            onChange={this.myChangeHandler}
          />
          <p>Enter your emailid:</p>
          <input
            type='text'
            name='age'
            onChange={this.myChangeHandler}
          />
          <p>Enter your Password:</p>
          <input
            type='text'
            name='age'
            onChange={this.myChangeHandler}
          />
<br></br><br></br>
<button>signup</button>
         </div>
          );
    }
}
 
export default Signup;