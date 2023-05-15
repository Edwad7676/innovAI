import React, { Component } from 'react';
import Signin from '../component/signin/signin.js'
import Register from '../component/register/register.js'
import '../App.css';
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";



const particleoption = {
    background: {
        color: {
            value: "none"
        }
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push"
            },
            onHover: {
                enable: true,
                mode: "repulse"
            },
            resize: true
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40
            },
            push: {
                quantity: 4
            },
            repulse: {
                distance: 200,
                duration: 0.4
            }
        }
    },
    particles: {
        color: {
            value: "#3CA9D1"
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
        },
        collisions: {
            enable: true
        },
        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false
        },
        number: {
            density: {
                enable: true,
                area: 800
            },
            value: 80
        },
        opacity: {
            value: 0.5
        },
        shape: {
            type: "circle"
        },
        size: {
            random: true,
            value: 5
        }

    },

    detectRetina: true

}

class Home extends Component {
    // this customizes the component tsParticles installation
    async customInit(engine: Engine): Promise<void> {
        // this adds the bundle to tsParticles
        await loadFull(engine);
    }

    constructor() {
        super();
        this.state = {
            changeto : ''
        }
    }

    signingin = (event) => {
        console.log(event.target.email.value);
        console.log(event.target.password.value);
        /*if email and pass is found then route*/
        
    }

    register_function = (event) => {
        console.log(event.target.email.value);
        console.log(event.target.password.value);
        
        /*data go to database*/
    }

    changingstate = () => {
        if (this.state.changeto === "register") {
            this.setState({ changeto: "signin" })
        } else {
            this.setState({ changeto: "register" })
        }
    }
    somefunction = () => {
        console.log("success");
    }

    render() {
        
        

        return (
            <div className="App">
                <Particles className='particles' options={particleoption} init={this.customInit} />
                {this.state.changeto === 'register'
                    ?
                    <Register signingin={this.register_function} changingstate={this.changingstate} />
                    :
                    <Signin signingin={this.signingin} changingstate={this.changingstate} />
                }
                
            </div>
        );
    }
}

export default Home;
