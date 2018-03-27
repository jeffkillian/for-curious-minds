import { observable, action, computed } from "mobx"
export default class AppStore {
    @observable roundTime = 0
    @observable startTime
    @observable timerRunning
    @observable isBlindMode
    @observable overallTime
    @observable totalAttempts
    @observable state
    @observable fastestTimeEver
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
        this.fastestTimeEver = this.getFastestTimeEver() || ""
    }
    @action startTimer(){
        this.timerRunning = true
        this.totalAttempts++
        this.startTime = Date.now()
        this.timer = setInterval(this.changeTime.bind(this), 10)
    }

    @action changeTime(){
        this.roundTime = Date.now()-this.startTime
    }
    @action changeOverallTime(){    
        this.overallTime = Date.now() - this.initialLaunchTime
    }

    @computed get printableTimeElapsed(){
        return this.printableTime(this.roundTime)
    }

    @computed get printableFastestTime(){
        return this.printableTime(this.fastestTimeEver)
    }

    printableTime(time){
        return (time/ 1000).toFixed(2)
    }

    @action stopTimer(){
        clearInterval(this.timer)
        this.timerRunning = false
        if (this.roundTime < 1000){
            this.onWin()
        }
        
    }

    @computed get isInWinState(){
        return this.state == "won";
    }
    
    @action onWin(){
        this.state = "won"
        this.handleSavingHighScoreToLocal()
        clearInterval(this.overallTimer)
        let timeInt = 3000  
     }

     @action handleSavingHighScoreToLocal(){
        var highScore = this.getFastestTimeEver()
        debugger
        if (!highScore || (this.elapsedTime < highScore) ) {
            localStorage.setItem('precision_high_score', this.elapsedTime);
            debugger
            this.fastestTimeEver = this.getFastestTimeEver()
        }
        
    }

    getFastestTimeEver(){
        return parseInt(localStorage.getItem("precision_high_score"))
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