import React from "react"  
import { observer, inject } from "mobx-react" 
import 'bootstrap';
import "jquery"
@inject("store") @observer
export default class AppContent extends React.Component {

render(){
    return(
        <div>
        {this.props.store.currentLevelComponent}
        </div>
    )
}


}