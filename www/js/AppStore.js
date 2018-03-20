import { observable, action } from "mobx"
export default class AppStore {
    @observable testVal
    constructor(){
        this.setTestVal()
    }

    @action setTestVal(){
        testVal = 1
    }
}