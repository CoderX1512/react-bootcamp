// import React, {Component} from 'react';
// import FormValidator from './formValidator1';
// // import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
  
// class App extends Component{
// constructor(){
// super();
  
// this.validator = new FormValidator([{
//     field: 'full_name',
//     method: 'isEmpty',
//     validWhen: false,
//     message: 'Enter full name.'
// }, {
//     field: 'email',
//     method: 'isEmpty',
//     validWhen: false,
//     message: 'Enter your email address.'
// }, {
//     field: 'email',
//     method: 'isEmail',
//     validWhen: true,
//     message: 'Enter valid email address.'
// }, {
//     field: 'phone',
//     method: 'isEmpty',
//     validWhen: false,
//     message: 'Enter a phone number.'
// }, {
//     field: 'phone',
//     method: 'matches',
//     args: [/^\(?\d\d\d\)? ?\d\d\d-?\d\d\d\d$/],
//     validWhen: true,
//     message: 'Enter valid phone number.'
// }, {
//     field: 'password',
//     method: 'isEmpty',
//     validWhen: false,
//     message: 'Enter password.'
// }, {
//     field: 'password_confirmation',
//     method: 'isEmpty',
//     validWhen: false,
//     message: 'Enter Password confirmation.'
// }, {
//     field: 'password_confirmation',
//     method: this.passwordMatch, // notice that we are passing a custom function here
//     validWhen: true,
//     message: 'Password and password confirmation do not match.'
// }]);
// this.state = {
//     full_name: '',
//     email: '',
//     phone: '',
//     password: '',
//     password_confirmation: '',
//     validation: this.validator.valid(),
// }
// this.submitted = false;
// }
// passwordMatch = (confirmation, state) => (state.password === confirmation)
// handleInputChange = event => {
//     event.preventDefault();
//     this.setState({
//         [event.target.name]: event.target.value,
//     });
// }
// handleFormSubmit = event => {
//     event.preventDefault();
//     const validation = this.validator.validate(this.state);
//     this.setState({
//         validation
//     });
//     this.submitted = true;
//     if(validation.isValid) {
//         //reaches here if form validates successfully...
//     }
// }
// render() {
// let validation = this.submitted ?this.validator.validate(this.state) : this.state.validation
  
// return (
// <div className="container">
//     <div className="row">
//         <div className="col-md-4 col-md-offset-4">
//             <form className="registrationForm">
//                 <h2>Registration form validation react js - Tutsmake.com</h2>
//                 <div className={validation.email.isInvalid && 'has-error'}>
//                     <label htmlFor="full_name">Full Name</label>
//                     <input type="string" className="form-control" name="full_name" placeholder="Full Name" onChange={this.handleInputChange} /> <span className="help-block">{validation.full_name.message}</span> </div>
//                 <div className={validation.email.isInvalid && 'has-error'}>
//                     <label htmlFor="email">Email address</label>
//                     <input type="email" className="form-control" name="email" placeholder="Email address" onChange={this.handleInputChange} /> <span className="help-block">{validation.email.message}</span> </div>
//                 <div className={validation.phone.isInvalid && 'has-error'}>
//                     <label htmlFor="phone">Phone(enter only 10 digit number)</label>
//                     <input type="phone" className="form-control" name="phone" placeholder="Phone Number" onChange={this.handleInputChange} /> <span className="help-block">{validation.phone.message}</span> </div>
//                 <div className={validation.password.isInvalid && 'has-error'}>
//                     <label htmlFor="password">Password</label>
//                     <input type="password" className="form-control" placeholder="Password" name="password" onChange={this.handleInputChange} /> <span className="help-block">{validation.password.message}</span> </div>
//                 <div className={validation.password_confirmation.isInvalid && 'has-error'}>
//                     <label htmlFor="password_confirmation">Confirm Password</label>
//                     <input type="password" className="form-control" placeholder="Confirm Password" name="password_confirmation" onChange={this.handleInputChange} /> <span className="help-block">{validation.password_confirmation.message}</span> </div>
//                 <button onClick={this.handleFormSubmit} className="btn btn-primary"> Register </button>
//             </form>
//         </div>
//     </div>
// </div>
// )
// }
  
// }
// export default App;



import React from 'react';
import './App.css';

function ValidationMessage(props) {
if (!props.valid) {
return(
<div className='error-msg'>{props.message}</div> ) }
return null;}

class App extends React.Component {
state = {
username: '', usernameValid: false,
email: '', emailValid: false,
password: '', passwordValid: false,
passwordConfirm: '', passwordConfirmValid: false,
formValid: false,
errorMsg: {}
}

validateForm = () => {
const {usernameValid, emailValid, passwordValid, passwordConfirmValid} = this.state;
this.setState({
formValid: usernameValid && emailValid && passwordValid && passwordConfirmValid
}) }

updateUsername = (username) => {
this.setState({username}, this.validateUsername)
}

validateUsername = () => {
const {username} = this.state;
let usernameValid = true;
let errorMsg = {...this.state.errorMsg}

if (username.length < 3) {
usernameValid = false;
errorMsg.username = 'Must be at least 3 characters long'
}

this.setState({usernameValid, errorMsg}, this.validateForm)
}

updateEmail = (email) => {
this.setState({email}, this.validateEmail)
}

validateEmail = () => {
const {email} = this.state;
let emailValid = true;
let errorMsg = {...this.state.errorMsg}

// checks for format _@_._
if (!/^[^s@]+@[^s@]+.[^s@]+$/.test(email)){
emailValid = false;
errorMsg.email = 'Invalid email format'
}

this.setState({emailValid, errorMsg}, this.validateForm)
}

updatePassword = (password) => {
this.setState({password}, this.validatePassword);
}

validatePassword = () => {
const {password} = this.state;
let passwordValid = true;
let errorMsg = {...this.state.errorMsg}

// must be 6 chars
// must contain a number
// must contain a special character

if (password.length < 6) {
passwordValid = false;
errorMsg.password = 'Password must be at least 6 characters long';
} else if (!/d/.test(password)){
passwordValid = false;
errorMsg.password = 'Password must contain a digit';
} else if (!/[!@#$%^&*]/.test(password)){
passwordValid = false;
errorMsg.password = 'Password must contain special character: !@#$%^&*';
}

this.setState({passwordValid, errorMsg}, this.validateForm);
}

updatePasswordConfirm = (passwordConfirm) => {
this.setState({passwordConfirm}, this.validatePasswordConfirm)
}

validatePasswordConfirm = () => {
const {passwordConfirm, password} = this.state;
let passwordConfirmValid = true;
let errorMsg = {...this.state.errorMsg}

if (password !== passwordConfirm) {
passwordConfirmValid = false;
errorMsg.passwordConfirm = 'Passwords do not match'
}

this.setState({passwordConfirmValid, errorMsg}, this.validateForm);
}

render() {
return (
<div className="App">
<header>
Form Validation
</header>
<main role='main'>
<form action='#' id='js-form'>

<div className='form-group'>

<label htmlFor='username'>Username</label>


<input type='text' id='username' name='username' className='form-field'
value={this.state.username} onChange={(e) => this.updateUsername(e.target.value)}/>
< ValidationMessage valid={this.state.usernameValid} message={this.state.errorMsg.username} />
</div>

<div className='form-group'>
<label htmlFor='email'>Email</label>
< ValidationMessage valid={this.state.emailValid} message={this.state.errorMsg.email} />
<input type='email' id='email' name='email' className='form-field'
value={this.state.email} onChange={(e) => this.updateEmail(e.target.value)}/>
</div>
<div className='form-group'>
<label htmlFor='password'>Password</label>
< ValidationMessage valid={this.state.passwordValid} message={this.state.errorMsg.password} />
<input type='password' id='password' name='password' className='form-field'
value={this.state.password} onChange={(e) => this.updatePassword(e.target.value)}/>
</div>

<div className='form-group'>
<label htmlFor='password-confirmation'>Password Confirmation</label>
< ValidationMessage valid={this.state.passwordConfirmValid}
message={this.state.errorMsg.passwordConfirm} />

<input type='password' id='password-confirmation' name='password-confirmation'
className='form-field' value={this.state.passwordConfirm}
onChange={(e) => this.updatePasswordConfirm(e.target.value)}/>
</div>
<div className='form-controls'>
<button className='button' type='submit' disabled={!this.state.formValid}>Sign Up</button>
</div>
</form>
</main>
</div>
);
}
}
export default App;