
import React from "react"  
import { observer, inject } from "mobx-react" 
import 'bootstrap';
import "jquery"
@inject("store") @observer
export default class Level1 extends React.Component {

    render(){

        return(
            <div>
                {this.renderWin()}
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
                    <div className="col-xs-12 button">
                    <div>Level 1: </div>
                    {this.renderStartStopButton()}</div>
                </div>
                <div className="row">
                    <div className="col-xs-6">{this.renderTotalAttempts()}</div>
                    <div className="col-xs-6">{this.renderOverallTime()}</div>

                </div>

            </div>
        )
    }

    renderStartStopButton(){
        const store = this.props.store.currentLevelStore
        
        const buttonClass = store.state == "playing" ? "danger" : "success"
        return(
                <button 
                    onTouchStart={store.onStartStopClick.bind(store)}
                    type="button" className={`btn btn-${buttonClass} start-button`} disabled = {store.state == "won"}>
                    {store.startStopButtonText}        
                </button>)
    }


    renderTotalAttempts(){
        
         const store = this.props.store.currentLevelStore
         if (!store.isInWinState) return

        return this.renderCellContent("Total Attempts", store.totalAttempts)
    }

    renderOverallTime(){
         const store = this.props.store.currentLevelStore
         if (!store.isInWinState) return
      return this.renderCellContent("Overall Time",store.printableOverallTime)
    }

    renderWow(){
         const store = this.props.store.currentLevelStore
        if (!store.isInWinState) return
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
    

    renderFastestTimeEver(){
        return 
         const store = this.props.store.currentLevelStore
        return(
            <div className="cell">
                <label>Overall Best Time</label>
                <div className="cell-value">{store.printableFastestTime}</div>
            </div>
        )
    }

    renderWin(){
         const store = this.props.store.currentLevelStore
        if (!store.isInWinState) return
        return(
            <div>
                {this.renderCrawler()}
            </div>
        )
    }

    renderCrawler(){
        
        return(<div className="imageSize crawlImage" onClick={this.props.store.goToNextLevel}>
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
         const store = this.props.store.currentLevelStore
        return (<div className="currentTime">
                {store.printableRoundTime}
                </div>
            )   
    }


}