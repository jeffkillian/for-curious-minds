import { observable, action, computed } from "mobx"
import $ from "jquery"
export default class Level4Store{


  @observable clicks
  constructor(){
    this.clicks = 0;
  }

  @action incrementClicks = () => {
    this.clicks++
  }

  @computed get winText() {
    if (this.clicks<1) return "You win"
    if (this.clicks<2) return "Great Job"
    if (this.clicks<5) return "Thanks for playing"
    if (this.clicks<10) return "You really like clicking"
    if (this.clicks<20) return "Haven't you had enough yet?"
    if (this.clicks<40) return "You successfully showed me that you are a curious person"
    if (this.clicks<70) return "Okay this is getting a little out of hand."
    return "This is the last message. Thanks for playing!"

  }
  
}