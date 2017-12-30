import { Component } from 'react'
import { inject, observer, Provider } from 'mobx-react'
import { initStore } from 'store'

export default ComposedComponent => {
  return class WithData extends Component {
    static async getInitialProps ({ req }) {
      let composedInitialProps
      const isServer = !!req
      const store = initStore(isServer)
      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx)
      }
      return { lastUpdate: store.lastUpdate, isServer, ...composedInitialProps }
    }

    constructor (props) {
      super(props)
      this.store = initStore(props.isServer)
    }

    componentDidMount () {
      if (process.env.NODE_ENV === 'development') {
        // For debugging inject store and url into window global scope
        window.store = this.store
        window.url = this.props.url
        // Put current pathname url into UI store
        // this.store.ui.pathname = this.props.url.pathname
      }
    }

    render () {
      // Return observer + injected + composed component with the store Provider
      return (
        <Provider store={this.store}>
          <ComposedComponent {...this.props} />
        </Provider>
      )
    }
  }
}
