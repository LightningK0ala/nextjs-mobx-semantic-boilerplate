import React from 'react'
import Link from 'next/link'
import Clock from './Clock'

class Page extends React.Component {
  componentDidMount () {
    this.props.store.start()
  }

  componentWillUnmount () {
    this.props.store.stop()
  }

  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Clock
          lastUpdate={this.props.store.lastUpdate}
          light={this.props.store.light}
        />
        <nav>
          <Link href={this.props.linkTo}>
            <a>Navigate</a>
          </Link>
        </nav>
      </div>
    )
  }
}

export default Page
