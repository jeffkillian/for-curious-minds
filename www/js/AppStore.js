import { observable, action, computed } from "mobx"
export default class AppStore {
    @observable elapsedTime = 0
    @observable startTime
    @observable timerRunning
    @observable isBlindMode
    @observable overallTime
    @observable totalAttempts
    @observable state
    constructor(){
        console.log(
            "need to add ondeviceready?"
        )
        this.state = "waiting"
        this.totalAttempts = 0
        this.startGame()
    }

    @action startGame(){
        this.initialLaunchTime = Date.now()
        this.overallTimer = setInterval(this.changeOverallTime.bind(this), 10)
        this.state = "playing"
    }
    @action startTimer(){
        this.timerRunning = true
        this.totalAttempts++
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
        if (this.elapsedTime < 1000){
            this.onWin()
        }
        
    }
    
    @action onWin(){
        this.state = "won"
        clearInterval(this.overallTimer)
        let timeInt = 3000  
        // $(".crawlImage").css("display","block")
        // .animate({right:'0px'},timeInt, "linear")
        // .animate({bottom:'0px', },2*timeInt, "linear")
        // .animate({left:'0px'},timeInt, "linear")
        // .animate({top:'0px'},2*timeInt, "linear");
     }

    @action restart(){
        this.state = "waiting"
        this.totalAttempts = 0
        this.startGame()
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