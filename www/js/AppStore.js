import React from "react"
import { observable, action, computed } from "mobx"
import Levels from "./levels/Levels"
export default class AppStore {
   
    @observable level = 0

    constructor(){
        this.levels=Levels
        this.levels.forEach(levelObj => {
            levelObj.store.gameStore = this
        })

    }


    addLevelToLevels(component, store){
        this.levels.push({
            component: component,
            store:store
        })

    }

    @computed get currentLevelComponent(){
        return this.levels[this.level].component
    }

    @computed get currentLevelStore(){
        return this.levels[this.level].store
    }

    goToNextLevel = () => {
        this.goToLevel(this.level+1)
    }

    @action goToLevel(levelNum){
        this.level = levelNum
    }
}