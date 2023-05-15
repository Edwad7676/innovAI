import React from 'react';
import {Navigate} from "react-router-dom";


class Signin extends React.Component{
    constructor() {
        super();
        this.state = {
            signInEmail: '',
            signInPassword: '',
            status:'',
        }
    }

    onEmailChange = (event) =>{
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) =>{
        this.setState({signInPassword: event.target.value})
    }

    onSubmitSignIn = () =>{
        console.log(this.state)
        fetch('http://localhost:3000/signin', {
            method:'post',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data === "accepted"){
                this.setState({status: "accepted"})
            }
        })
    }
    donothing = () =>{
        return
    }

    render(){
            return (
            
            <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-1 mw5 center">
            {this.state.status === "accepted" ? <Navigate to="/main" />: this.donothing}
                <main className="pa4 black-80">
                    <div className="measure" >
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
                                <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email" id="email"/>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password"/>
                            </div>
                        </fieldset>
                        <div className="">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"  onClick={this.onSubmitSignIn} type="submit" value="Sign in" />
                        </div>
                        <div className="lh-copy mt3">
                            <a href="#0" className="f6 link dim black db" onClick={this.props.changingstate}>Register</a>
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default Signin;