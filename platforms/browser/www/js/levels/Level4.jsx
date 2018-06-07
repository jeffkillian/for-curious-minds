
import React from "react"  
import { observer, inject } from "mobx-react" 
import 'bootstrap';
import "jquery"
import Fireworks from "fireworks-canvas"

@inject("store") @observer
export default class Level4 extends React.Component {

    componentDidMount(){
        const container = document.getElementById('container')
        const options = {
            maxRockets: 3,            // max # of rockets to spawn
            rocketSpawnInterval: 150, // millisends to check if new rockets should spawn
            numParticles: 100,        // number of particles to spawn when rocket explodes (+0-10)
            explosionMinHeight: 0.2,  // percentage. min height at which rockets can explode
            explosionMaxHeight: 0.9,  // percentage. max height before a particle is exploded
            explosionChance: 0.08     // chance in each tick the rocket will explode
        
        }
        // instantiate the class and call start
        // this returns a disposable - calling it will stop fireworks.
        const fireworks = new Fireworks(container, options)
        const stop = fireworks.start()
    }
    render(){
        return(
            <div>
                <div id="container" className="fireworks-container">
                </div>
                <div className="centered">You win2</div>
            </div>
        )
    }
}

