import React, {Component} from  'react'
import TextBox from '../component/TextBox'
import CheckBox from '../component/CheckBox'
import Button from '../component/Button'
import '../css/login.css'
import {emailValidation,passwordValidation} from '../utils/LoginVerification'
export default class Login extends Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:'',
            emailError:'',
            passError:''
        }
    }
    handleSubmission = (e) => {
        e.preventDefault()
        let error=emailValidation(this.state.email);
        let perror=passwordValidation(this.state.password)
        if(error==='verified' && perror==='verified'){
            this.setState({passError: '',emailError: ''})
            console.log("Successfully submitted")
        }else {
            if(error!=='verified'){
                this.setState({emailError: error})
            }else{
                this.setState({emailError: ''})
            }
            if(perror!=='verified'){
                this.setState({passError: perror})
            }else{
                this.setState({passError: ''})
            }

        }
    }
    handleEmail = (e) =>{
        this.setState({email:e.target.value})
    }
    handlePassword = (e) => {
        this.setState({password: e.target.value})
    }
    render(){
        return(
            <div className="login-box">
                {/*Login Logo*/}
                <div className="login-logo">
                   <a href="#">
                   <b>Admin</b>LTE
                   </a>
                </div>
                {/*End of login logo*/}
               <div className="login-body">
                   <p className="box-msg">Sign in to start your session</p>
                   <TextBox type="email" place="Email" change={this.handleEmail} val={this.state.email} err={this.state.emailError}/>
                   <TextBox type="password" place="Password" change={this.handlePassword} val={this.state.password} err={this.state.passError}/>
                    <div className="login-box-sub">
                       <div className="login-box-sub-check">
                           <CheckBox sty="login-box-check"/><span>Remember Me</span>
                       </div>
                       <div className="login-box-sub-check-btn">
                           <Button sty="login-btn" click={this.handleSubmission}/>
                       </div>
                    </div>
                    <div className="ftn">
                        <a href="#"> I forgot my password </a><br />
                        <a href="#"> Register a new membership</a>
                    </div>
                </div>
            </div>
        )
    }
}