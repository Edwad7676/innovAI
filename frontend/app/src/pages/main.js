import React, { Component } from 'react';
import Navigation from '../component/Navigation/Navigation.js'
import Logo from '../component/logo/logo.js'
import ImageLinkform from '../component/imagelinkform/imagelinkform.js'
import Count from '../component/count/count.js'
import Facerecognition from '../component/facerecognition/facerecognition.js'
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


class App extends Component {
    // this customizes the component tsParticles installation
    async customInit(engine: Engine): Promise<void> {
        // this adds the bundle to tsParticles
        await loadFull(engine);
    }

    constructor() {
        super();
        this.state = {
            input: 'first input',
            img_url: '',
            Face_quantity: '',
            bounding_box: []
        }
    }

    onInputChange = (event) => {
        /*console.log(event.target.value)*/
        /*this.setState({ input: event.target.value })*/
        this.setState({ img_url: event.target.value })
        this.setState({ bounding_box: [] })
    }

    sendingimage = () => {
        fetch('http://localhost:3000/predict', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                img_url: this.state.img_url
            })
        })
            .then(response => response.json())
            .then(data => {
                const placeholder = []
                this.setState({ Face_quantity: data.data.length })
                data.data.map((item) => placeholder.push(this.filteringData(item)))
                this.setState({ bounding_box: placeholder })
            })
        
        
    }

    filteringData = (data) => {
        
        try {
            
            const current_Image = document.getElementById('inputimage');
            const width = Number(current_Image.width);
            const height = Number(current_Image.height);
          
            return {
                toprow: data.top_row * height,
                leftcol: data.left_col * width,
                bottomrow: height - (data.bottom_row * height),
                rightcol: width - (data.right_col * width)
            }
        } catch {
            
            console.log("error detected in filtering data")
        }
        
    }

    onSubmit = () => {
        this.sendingimage();
    }

    render() {

        return (
            <div className="App">
                <Particles className='particles' options={particleoption} init={this.customInit} />
                <Navigation />
                <Logo />
                <Count Face_quantity={this.state.Face_quantity} />
                <ImageLinkform onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
                <Facerecognition img_url={this.state.img_url} bounding_box={this.state.bounding_box} />
            </div>
        );
    }
}

export default App;
