import React from "react"  
import { observer, inject } from "mobx-react" 
import 'bootstrap';
import "jquery" 
@inject("store") @observer
export default class Level1 extends React.Component {

    render(){

        return(
            <h4 className="centered" >
                Skill, creativity, and curiosity are key. 
                <div className="margin-top-two">
                    Touch 
                        <span onTouchStart={this.props.store.goToNextLevel}> anywhere</span> to begin.
                </div>
            </h4>
        )
    }

}