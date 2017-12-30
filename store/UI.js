import { action, observable } from 'mobx'

export default class UI {
  @observable lastUpdate = Date.now()
  @observable light = false

  @action
  start = () => {
    this.timer = setInterval(() => {
      this.lastUpdate = Date.now()
      this.light = true
    })
  }

  stop = () => clearInterval(this.timer)
}
