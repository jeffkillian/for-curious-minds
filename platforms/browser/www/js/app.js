import AppContent from "./AppContent.jsx"
import React from 'react';
import ReactDOM from "react-dom"
// import { Provider } from "mobx-react"
// import AppStore from "./AppStore.js"

document.addEventListener("DOMContentLoaded", () => {
//const appStore = new AppStore()
ReactDOM.render(

        <AppContent />
   , document.getElementById("appContents"));

})