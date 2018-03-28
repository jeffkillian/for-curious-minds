import { observable, action, computed } from "mobx"
export default class AppStore {
    @observable roundTime = 0
    @observable roundTimerRunning
    @observable overallTime
    @observable totalAttempts
    @observable state
    @observable fastestTimeEver
    @observable lastRoundScore
    constructor(){
        console.log(
            "need to add ondeviceready?"
        )
        this.state = "stopped"
        this.totalAttempts = 0
    }

    @action startGame(){
        this.initialLaunchTime = Date.now()
        this.overallTimer = setInterval(this.changeOverallTime.bind(this), 10)
        this.fastestTimeEver = this.getFastestTimeEver() || ""
        this.startRound()
    }
    @action startRound(){
        if (!this.initialLaunchTime) return this.startGame()
        this.state = "playing"
        this.roundTimerRunning = true
        this.totalAttempts++
        this.roundStartTime = Date.now()
        this.roundTimer = setInterval(this.changeRoundTime.bind(this), 10)
    }

    @action changeRoundTime(){
        this.roundTime = Date.now()-this.roundStartTime
    }
    @action changeOverallTime(){    
        this.overallTime = Date.now() - this.initialLaunchTime
    }

    @computed get printableRoundTime(){
        return this.printableTime(this.roundTime)
    }

    @computed get printableOverallTime(){
        return this.printableTime(this.overallTime)
    }

    @computed get printableFastestTime(){
        return this.printableTime(this.fastestTimeEver)
    }

    @computed get printableLastRoundTime(){
        return this.printableTime(this.lastRoundScore)
    }

    printableTime(time){
        return (time/ 1000).toFixed(3)
    }

    onStartStopClick() {
        if (this.state == "playing") return this.endRound()
        return this.startRound()
    }

    @action endRound(){
        this.state = "stopped"
        clearInterval(this.roundTimer)
        this.roundTimerRunning = false
        if (this.roundTime == 1000){
            return this.onWin()
        }
        this.lastRoundScore = this.roundTime
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
        if (!highScore || (this.overallTime < this.getFastestTimeEver()) ) {
            localStorage.setItem('precision_high_score', this.elapsedTime);
            this.fastestTimeEver = this.getFastestTimeEver()
        }
        
    }

    @computed get startStopButtonText(){
        return this.state == "playing" ? "Stop" : "Start"
    }

    getFastestTimeEver(){
        return parseInt(localStorage.getItem("precision_high_score"))
    }

}