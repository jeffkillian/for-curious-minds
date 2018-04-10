import React from "react"  
import { observer, inject } from "mobx-react" 
import 'bootstrap';
import "jquery"
@inject("store") @observer
export default class AppContent extends React.Component {

    render(){

        return(
            <div>
                {this.renderWin()}
                <div className="title">Curiosity</div>
                {this.renderRoundTime()}
                {this.renderGrid()}
                {this.renderWow()}
            </div>
        )
    }

    renderGrid(){
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12 button">{this.renderStartStopButton()}</div>
                </div>
                <div className="row">
                    <div className="col-xs-12">{this.renderRestartButton()}</div>
                </div>
                <div className="row">
                    <div className="col-xs-6">{this.renderTotalAttempts()}</div>
                    <div className="col-xs-6">{this.renderOverallTime()}</div>

                </div>
                <div className="row">
                    <div className="col-xs-6">{this.renderLastRoundScore()}</div>
                    <div className="col-xs-6">{this.renderFastestTimeEver()}</div>
            
                </div>


            </div>
        )
    }

    renderStartStopButton(){
        const store = this.props.store
        const buttonClass = store.state == "playing" ? "danger" : "success"
        return(
                <button 
                    onMouseDown={store.onStartStopClick.bind(store)}
                    type="button" className={`btn btn-${buttonClass} start-button`} disabled = {this.props.store.state == "won"}>
                    {this.props.store.startStopButtonText}        
                </button>)
    }


    renderTotalAttempts(){
        return this.renderCellContent("Total Attempts", this.props.store.totalAttempts)
    }

    renderOverallTime(){
      return this.renderCellContent("Overall Time",this.props.store.printableOverallTime)
    }

    renderWow(){
        if (!this.props.store.isInWinState) return
        return (
            <img className="wow-image" src="img/wow.png" />
        )
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
                type="button" className="btn btn-secondary" >
               Restart game
            </button>
        </div>
        )
    }
    
    renderLastRoundScore(){
        return this.renderCellContent("Last Round Score",this.props.store.printableLastRoundTime)
    }

    renderFastestTimeEver(){
        return(
            <div className="cell">
                <label>Overall Best Time</label>
                <div className="cell-value">{this.props.store.printableFastestTime}</div>
                {this.renderButtonResetFastestTime()}
            </div>
        )
    }

    renderWin(){
        if (!this.props.store.isInWinState) return
        return(
            <div>
                {this.renderCrawler()}
            </div>
        )
    }

    renderCrawler(){
        
        return(<div className="imageSize crawlImage">
                <img src="img/banana-cluster.png" className="imageSize"/>
                </div>
        )
    }

    renderAttempts(){
        return(
            <div>
                
                </div>
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
                        Reset
                        
                    </button>
            </div>
        )
    }


}