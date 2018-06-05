import { observable, action, computed } from "mobx"
import $ from "jquery"
export default class Level3Store{

  @observable touchedSquares = [1]
  constructor(wizardStore){
  }

  @action onTouchStart(id, e){
    if (id== 10) return this.gameStore.goToNextLevel()
    this.touchedSquares.push(id+1)
    console.log(this.touchedSquares)
  }
  @action onTouchEnd(id, e){
    if (id == 1) return this.touchedSquares = [1]
    this.touchedSquares = this.touchedSquares.filter(itemId => itemId < id)
  }

}