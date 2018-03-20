import React from "react"  
import { observer, inject } from "mobx-react" 

@inject("store") @observer
export default class AppContent extends React.Component {

    render(){
        return(
            <div>
                {this.props.store.testVal}
                React is working.
                </div>
        )
    }
}