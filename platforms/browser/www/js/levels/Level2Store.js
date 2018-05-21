import { observable, action, computed } from "mobx"
import $ from "jquery"
export default class Level2Store {
    @observable lastClicked = ""
    constructor(){
        console.log(
            "need to add ondeviceready?"
        )
    }

    @action onClick(id){
        this.numBoxes = 9
        this.lastClicked =  this.lastClicked + id.toString()
        if (this.lastClicked.length > this.numBoxes) this.lastClicked = this.lastClicked.substring(1);
        this.highlight(".lightUp"+id)
        console.log(this.lastClicked)
        console.log(this.lastClicked=="12")
    }

    @computed get validValues() {
        let badVal = false
        let startChar = this.lastClicked.lastIndexOf("1")
        if (startChar < 0) return ""
        let restOfString = this.lastClicked.substring(startChar)
        for (var i = 0; i< restOfString.length; i++){
            let char = restOfString[i]
            if (char != (i+1).toString()){
               badVal = true
               break
            }
        }
        if (badVal) return ""
        return restOfString
    }

    highlight(divClass){
       $(divClass).addClass("highlighted")
        setTimeout(()=>{ $(divClass).removeClass("highlighted"); },1000)
    }






}