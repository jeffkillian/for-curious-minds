import { observable, action, computed } from "mobx"
export default class Level1Store {
    @observable roundTime = 0
    @observable roundTimerRunning
    @observable overallTime = ""
    @observable totalAttempts = 0
    @observable state
    @observable fastestTimeEver
    @observable lastRoundScore
    constructor(){
        console.log(
            "need to add ondeviceready?"
        )
        this.state = "stopped"
        this.fastestTimeEver = this.getFastestTimeEver() || ""
    }

    @action startGame = () => {
        
        this.totalAttempts = 0 
        this.initialLaunchTime = Date.now()
        this.overallTimer = setInterval(this.changeOverallTime.bind(this), 10)

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
        if (!this.fastestTimeEver) return "-"
        return this.printableTime(this.fastestTimeEver)
    }

    @computed get printableLastRoundTime(){
        if (!this.lastRoundScore) return "-"
        return this.printableTime(this.lastRoundScore)
    }

    printableTime(time){
        return (time/ 1000).toFixed(3)
    }

    onStartStopClick() {
        if (this.state == "won") return
        if (this.state == "playing") return this.endRound()
        return this.startRound()
    }

    @action endRound(){
        this.state = "stopped"
        clearInterval(this.roundTimer)
        this.roundTimerRunning = false
        if (this.scoreIsAWinner()){
            return this.onWin()
        }
        this.lastRoundScore = this.roundTime
    }
    scoreIsAWinner(){
        return this.roundTime >=990 && this.roundTime <= 1010
    }
    

    @computed get isInWinState(){
        return this.state == "won";
    }
    
    @action onWin(){
        this.state = "won"
        this.handleSavingHighScoreToLocal()
        clearInterval(this.overallTimer)
     }

     @action handleSavingHighScoreToLocal(){
        if (!this.fastestTimeEver || (this.overallTime < this.getFastestTimeEver()) ) {
            localStorage.setItem('precision_high_score', this.overallTime);
            this.fastestTimeEver = this.getFastestTimeEver()
        }
        
    }

    @computed get startStopButtonText(){
        return this.state == "playing" ? "Stop" : "Start"
    }

    getFastestTimeEver(){
        return parseInt(localStorage.getItem("precision_high_score"))
    }

resetFastestTime(){
        var r = confirm("Are you sure you want to reset?");
        if (r == true) {
            localStorage.removeItem('precision_high_score');
            this.fastestTimeEver = this.getFastestTimeEver()
        }

    }

}