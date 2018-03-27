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
                {this.renderCrawler()}
                <div className="title">Road to Precision</div>
                {this.renderRoundTime()}
                <div> 
        
                        <div className="button">
                            <button 
                                onClick={store.toggleTimer.bind(store)}
                                type="button" className="btn btn-primary" disabled = {this.props.store.state == "won"}>
                                {store.buttonText}
                                
                            </button>
                        </div>
                        
                    {this.renderAttempts()}
                    {this.renderRestart()}
                    {this.renderOverallTime()}
                    {this.renderFastestTimeEver()}
                </div>
            </div>
        )
    }

    renderFastestTimeEver(){
        if (!this.props.store.fastestTimeEver) return null
        return (
            <div>
                Overall best time: {this.props.store.printableFastestTime}
                </div>
        )
    }

    renderCrawler(){
        if (!this.props.store.isInWinState) return
        return(<div className="imageSize crawlImage">
                <img src="/www/img/banana-cluster.png" className="imageSize"/>
                </div>
        )
    }

    renderRestart(){
        if (!this.props.store.isInWinState) return
        return(
            <div className="button">
            <button 
                onClick={this.props.store.restart.bind(this.props.store)}
                type="button" className="btn btn-primary">
                Restart
            </button>
        </div>
        )
    }

    renderAttempts(){
        return(
            <div>
                Total Attempts: {this.props.store.totalAttempts}
                </div>
        )
    }
    renderNew(){
        if (!this.props.store.newHighScore) return null
        return (
            <span>NEW</span>
        )
    }

    renderRoundTime(){
        if (this.props.store.isBlindMode) return null
        return (<div className="currentTime">
                {this.props.store.roundTime}
                </div>
            )   
    }

    renderOverallTime(){
        return(
            <div className="overall-elapsed-time">
                {this.props.store.printableTimeElapsed}
            </div>
        )
    }
}