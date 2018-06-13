
import React from "react"  
import { observer, inject } from "mobx-react" 
import 'bootstrap';
import "jquery"
import Fireworks from "fireworks-canvas"

@inject("store") @observer
export default class Level4 extends React.Component {


    constructor(options){
        super(options)
        this.fireworks = ""



    }
    componentDidMount(){
        const container = document.getElementById('container')
        const options = {
            maxRockets: 1,            // max # of rockets to spawn
            rocketSpawnInterval: 1000, // millisends to check if new rockets should spawn
            numParticles: 100,        // number of particles to spawn when rocket explodes (+0-10)
            explosionMinHeight: 0.2,  // percentage. min height at which rockets can explode
            explosionMaxHeight: .9,  // percentage. max height before a particle is exploded
            explosionChance: 0.08     // chance in each tick the rocket will explode
        
        }
        // instantiate the class and call start
        // this returns a disposable - calling it will stop fireworks.
        this.fireworks = new Fireworks(container, options)
        const stop = this.fireworks.start()
        document.addEventListener("click", x=>{
            this.fireworks.fire() // fire a single rocket.
        })
    }

    
    render(){
        return(
            <div onClick={this.props.store.currentLevelStore.incrementClicks}>
                <div className="win-text-wrapper">
                    <div>{this.props.store.currentLevelStore.winText}</div>
                </div>
                <div id="container" className="fireworks-container"></div>
                
                
            </div>
        )
    }
}

