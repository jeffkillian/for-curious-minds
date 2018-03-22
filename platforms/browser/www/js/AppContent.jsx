import React from "react"  
import { observer, inject } from "mobx-react" 
import 'bootstrap';
import "jquery"
@inject("store") @observer
export default class AppContent extends React.Component {

    render(){
        const store = this.props.store
        return(
            <div>
                <div className="title">Road to Precision</div>
                {this.renderElapsedTime()}
                <div> 
                    <div className="row">
                        <div className="col-sm-4">
                            <button 
                                onClick={store.toggleTimer.bind(store)}
                                type="button" className="btn btn-primary">
                                {store.buttonText}
                            </button>
                        </div>
                        <div className="col-sm-6">
                            <button className="ml-1"
                                onClick={store.toggleBlindMode.bind(store)}
                                type="button" className="btn btn-success">
                                Toggle Blind Mode
                            </button>
                            </div>
                    </div>
                    {this.renderHighScore()}

                    {this.renderOverallTime()}
                </div>
            </div>
        )
    }
    renderHighScore(){
        return(
            <div>
                {this.renderNew()}
                High Score:{this.props.store.highScore}
            </div>
        )
    }
    renderNew(){
        if (!this.props.store.newHighScore) return null
        return (
            <span>NEW</span>
        )
    }

    renderElapsedTime(){
        if (this.props.store.isBlindMode) return null
        return (<div className="currentTime">
                {this.props.store.elapsedTime}
                </div>
            )   
    }

    renderOverallTime(){
        return(
            <div>
                {this.props.store.overallTimeElapsed}
            </div>
        )
    }
}