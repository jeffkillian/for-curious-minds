
import React from "react"  
import { observer, inject } from "mobx-react" 
import 'bootstrap';
import "jquery"
import fireworks from "fireworks";

@inject("store") @observer
export default class Level4 extends React.Component {

    onComponentDidMount(){
        fireworks({
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            colors: ["#cc3333", "#4CAF50", "#81C784"]
          })
    }
    render(){
        return(
            <div className="centered">You win</div>
        )
    }
}

