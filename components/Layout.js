import { Component } from 'react'
import Head from 'next/head'
import { Container } from 'semantic-ui-react'

export default class Layout extends Component {
  render () {
    const { children } = this.props
    return [
      <Head key='Head'>
        {/* Semantic UI */}
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css'
        />
        {/* Global Styling Defaults */}
        <style>{`
          html, body {
            color: #666;
            margin: 0; padding: 0;
          }
          p { line-height: 1.5em; }

          /* Height 100% */
          html, body, #__next, [data-reactroot], .max-height {
            height: 100%;
          }
        `}</style>
      </Head>,
      <Container key='container' style={{ padding: '3em' }}>
        {children}
      </Container>
    ]
  }
}
