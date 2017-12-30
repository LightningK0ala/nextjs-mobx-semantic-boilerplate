import { action, observable } from 'mobx'
import UI from './UI'

let store = null

// RootStore combines multiple stores and can share references accross stores
class RootStore {
  constructor (isServer) {
    this.ui = new UI()
  }
}

export function initStore (isServer) {
  if (isServer) {
    return new RootStore()
  } else {
    if (store === null) {
      store = new RootStore()
    }
    return store
  }
}
