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
                {this.renderLastRoundScore()}
                <div> 
        
                        <div className="button">
                            <button 
                                onMouseDown={store.onStartStopClick.bind(store)}
                                type="button" className="btn btn-primary" disabled = {this.props.store.state == "won"}>
                                {this.props.store.startStopButtonText}
                                
                            </button>
                        </div>
                        
                    {this.renderAttempts()}
                    {this.renderOverallTime()}
                    {this.renderFastestTimeEver()}
                </div>
            </div>
        )
    }

    renderLastRoundScore(){
        return(
            <div>
                Last Round Score: {this.props.store.printableLastRoundTime}
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
        return (<div className="currentTime">
                {this.props.store.printableRoundTime}
                </div>
            )   
    }

    renderOverallTime(){
        return(
            <div className="overall-elapsed-time">
                {this.props.store.printableOverallTime}
            </div>
        )
    }


}