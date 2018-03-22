import AppContent from "./AppContent.jsx"
import React from 'react';
import ReactDOM from "react-dom"
import { Provider } from "mobx-react"
import AppStore from "./AppStore.js"
import 'bootstrap';
import "jquery"

document.addEventListener("DOMContentLoaded", () => {
const appStore = new AppStore()
ReactDOM.render(
    <Provider store={appStore}>
        <AppContent />
        </Provider>
   , document.getElementById("appContents"));

})