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
          <form>
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
          </form>
          );
    }
}
 
export default Signup;