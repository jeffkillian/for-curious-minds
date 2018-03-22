import { observable, action, computed } from "mobx"
export default class AppStore {
    @observable elapsedTime = 0
    @observable startTime
    @observable timerRunning
    @observable highScore
    @observable newHighScore
    @observable isBlindMode
    @observable overallTime
    constructor(){
        console.log(
            "need to add ondeviceready?"
        )
        this.highScore = 1000
        this.startOverallTimer()
    }

    @action startOverallTimer(){
        this.initialLaunchTime = Date.now()
        this.overallTimer = setInterval(this.changeOverallTime.bind(this), 10)
    }
    @action startTimer(){
        this.timerRunning = true
        this.startTime = Date.now()
        this.timer = setInterval(this.changeTime.bind(this), 10)
    }

    @action changeTime(){
        this.elapsedTime = Date.now()-this.startTime
    }
    @action changeOverallTime(){
        this.overallTime = Date.now()-this.initialLaunchTime
    }

    @computed get overallTimeElapsed(){
        return (this.overallTime / 1000).toFixed(2)
    }

    @action stopTimer(){
        clearInterval(this.timer)
        this.timerRunning = false
        var difference = Math.abs(1000-this.elapsedTime)
        if (difference < this.highScore){
            this.newHighScore = true
            this.highScore = difference
        }else{
            this.newHighScore = false;
        }

        if (difference == 0){
            clearInterval(this.overallTimer)
        }
        
    }

    @action toggleBlindMode(){
        this.isBlindMode = !this.isBlindMode

    }

    toggleTimer(){
        if (this.timerRunning) return this.stopTimer()
        this.startTimer()
    }

    @computed get buttonText(){
        if (this.timerRunning) return "Stop"
        return "Start"
    }
}