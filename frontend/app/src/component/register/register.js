import React from 'react';
import { Navigate } from "react-router-dom";


class Register extends React.Component{
    constructor() {
        super();
        this.state = {
            RegisterEmail: ' ',
            RegisterPassword: ' ',
            state: ' '
        }
    }

    registeringEmail = (event) => {
        this.setState({ RegisterEmail: event.target.value })
    }

    registeringPassword = (event) => {
        this.setState({ RegisterPassword: event.target.value })
    }

    onSubmitRegister = () => {
        console.log(this.state)
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.RegisterEmail,
                password: this.state.RegisterPassword
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data === "registered") {
                    this.setState({ status: "registered" })
                }
            })
    }

    donothing = () => {
        return
    }

    render() {
        return (
            <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-1 mw5 center">
                {this.state.status === "registered" ? <Navigate to="/" /> : this.donothing}
                <main className="pa4 black-80">
                    <form className="measure" onSubmit={this.props.signingin}>
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f4 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
                                <input onChange={this.registeringEmail} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email" id="email" />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input onChange={this.registeringPassword} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                            </div>
                        </fieldset>
                        <div className="">
                            <input onClick={this.onSubmitRegister} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
                        </div>
                        <div className="lh-copy mt3">
                            <a href="#0" onClick={this.props.changingstate} className="f6 link dim black db">back</a>
                        </div>
                    </form>
                </main>
            </article>
        );
    }
    
}

export default Register;