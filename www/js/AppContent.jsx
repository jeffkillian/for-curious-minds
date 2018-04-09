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
                                onMouseDown={store.onStartStopClick.bind(store)}
                                type="button" className="btn btn-primary" disabled = {this.props.store.state == "won"}>
                                {this.props.store.startStopButtonText}
                                
                            </button>
                        </div>


                    {this.renderGrid()}
                </div>
            </div>
        )
    }

    renderGrid(){
        return (
            <div>

                <div className="row">
                    <div className="col-xs-6">{this.renderTotalAttempts()}</div>
                    <div className="col-xs-6">{this.renderOverallTime()}</div>

                </div>
                <div className="row">
                    <div className="col-xs-6">{this.renderLastRoundScore()}</div>
                    <div className="col-xs-6">{this.renderFastestTimeEver()}</div>
            
                </div>
                <div className="row">
                    <div className="col-xs-12">{this.renderButtonResetFastestTime()}</div>
                </div>
                <div className="row">
                    <div className="col-xs-12">{this.renderRestartButton()}</div>
                </div>

            </div>
        )
    }


    renderTotalAttempts(){
        return this.renderCellContent("Total Attempts", this.props.store.totalAttempts)
    }

    renderOverallTime(){
      return this.renderCellContent("Overall Time",this.props.store.printableOverallTime)
    }

    renderCellContent(label, value){
        return(
            <div className="cell">
                <label>{label}</label>
                <div className="cell-value">{value}</div>
            </div>
        )
    }

    renderRestartButton(){
        return(
            <div className="button">
            <button 
                disabled ={!this.props.store.isInWinState}
                onMouseDown={this.props.store.startGame.bind(this.props.store)}
                type="button" className="btn btn-primary" >
               Restart game
            </button>
        </div>
        )
    }
    
    renderLastRoundScore(){
        return this.renderCellContent("Last Round Score",this.props.store.printableLastRoundTime)
    }

    renderFastestTimeEver(){
        return this.renderCellContent("Overall Best Time", this.props.store.printableFastestTime)
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


    renderButtonResetFastestTime(){
        return(
            <div className="button">
                    <button 
                        onMouseDown={this.props.store.resetFastestTime.bind(this.props.store)}
                        type="button" className="btn btn-primary">
                        Reset Fastest Time
                        
                    </button>
            </div>
        )
    }


}