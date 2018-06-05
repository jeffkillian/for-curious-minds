
import React from "react"  
import { observer, inject } from "mobx-react" 
import 'bootstrap';
import "jquery"
@inject("store") @observer
export default class Level3 extends React.Component {

 render(){
     return(
        <div>
            {this.renderTouchSquare(1,280,150)}
            {this.renderTouchSquare(2,548,119)}
            {this.renderTouchSquare(3,92,28)}
            {this.renderTouchSquare(4,170,280)}
            {this.renderTouchSquare(5,534,269)}
            {this.renderTouchSquare(6,540,10)}
            {this.renderTouchSquare(7,80,260)}
            {this.renderTouchSquare(8,253,232)}
            {this.renderTouchSquare(9,170,30)}
            {this.renderTouchSquare(10,390,270)}
        </div>

     )
 }

 renderTouchSquare(id,y,x){
     const store = this.props.store.currentLevelStore
     if (!store.touchedSquares.includes(id)) return
     const divStyle = {
         top:y,
         left:x
     }
     return(
         <div className = "touchSquare" style={divStyle}
         onTouchStart={store.onTouchStart.bind(store, id)}
         onTouchEnd = {store.onTouchEnd.bind(store, id)}
         
         id={`lvl3_${id}`}>
        </div>
     )
 }


}

