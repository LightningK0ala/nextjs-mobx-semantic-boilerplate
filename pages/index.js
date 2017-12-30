import React from 'react'
import Link from 'next/link'
import Clock from 'components/Clock'
import Layout from 'components/Layout'
import withData from 'components/hoc/with-data'
import { inject, observer } from 'mobx-react'
import { Header } from 'semantic-ui-react'

@withData
@inject('store')
@observer
class Page extends React.Component {
  componentDidMount () {
    this.props.store.ui.start()
  }

  componentWillUnmount () {
    this.props.store.ui.stop()
  }

  render () {
    const { lastUpdate, light } = this.props.store.ui
    return (
      <Layout>
        <Header as='h1'>Index Page</Header>
        <Clock lastUpdate={lastUpdate} light={light} />
        <nav>
          <Link href={'/other'}>
            <a>Navigate</a>
          </Link>
        </nav>
      </Layout>
    )
  }
}

export default Page
