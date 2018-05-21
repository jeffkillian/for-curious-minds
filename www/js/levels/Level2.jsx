import React from "react"  
import { observer, inject } from "mobx-react" 
import 'bootstrap';
import "jquery" 
@inject("store") @observer
export default class Level2 extends React.Component {

    render(){

        const store = this.props.store.currentLevelStore
        if (store.lastClicked == "123456789") return this.renderWin()
        return(
            <div>
            <div className="hcentered">Level2</div>
                <div className="row">
                    {this.renderLightUps()}
                </div>
                <div className="row">
                    <div className="col-xs-3 touch touch1" onClick={() => {store.onClick(1)}}> </div>
                    <div className="col-xs-3 touch touch2" onTouchStart={() => {store.onClick(2)}}> </div>
                    <div className="col-xs-3 touch touch3" onTouchStart={() => {store.onClick(3)}}> </div>
                    <div className="col-xs-3 touch touch4" onTouchStart={() => {store.onClick(4)}}> </div>

                </div>
                <div className="row">
                    <div className="col-xs-3 touch touch5" onTouchStart={() => {store.onClick(5)}}> </div>
                    <div className="col-xs-3 touch touch6" onTouchStart={() => {store.onClick(6)}}></div>
                    <div className="col-xs-3 touch touch7" onTouchStart={() => {store.onClick(7)}}></div>
                    <div className="col-xs-3 touch touch8" onTouchStart={() => {store.onClick(8)}}></div>
                    <div className="col-xs-3 touch touch9" onTouchStart={() => {store.onClick(9)}}></div>

                </div>
            </div>
        )
    }

    renderLightUps(){
        
        var rows = []
        for (var i=1;i<10; i++){
            let char = i.toString()
            let className = "lightUp " + "lightUp"+ char
            if (this.props.store.currentLevelStore.validValues.indexOf(char)>-1) className = className + " bg-red"
            rows.push(<div key ={i} className={className}></div>)
        }

        return rows
    }
    renderWin(){
        return(
            <div>YOU WON</div>
        )
    }

}