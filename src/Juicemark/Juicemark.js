import React from 'react'
import { Container, Header, Meter, ProgressContainer, ProgressBit, Button } from './styledComponents'

class Juicemark extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      score: null,
      stack: [],
      running: false
    }
    this.startTime = null
  }

  componentDidMount () {
    this.props.autorun && this.run()
  }

  triggerEvent (event, payload) {
    switch (event) {
      case 'onStart':
        this.props.onStart && this.props.onStart()
        break
      case 'onProgress':
        this.props.onProgress && this.props.onProgress(Math.floor((100 / 359) * payload))
        break
      case 'onComplete':
        this.props.onComplete && this.props.onComplete(payload)
        break
      default:
        break
    }
  }

  run () {
    this.triggerEvent('onStart')
    this.startTime = Date.now()
    this.setState({ running: true })
    var temp = []
    let count = 0
    let timer = window.setInterval(() => {
      this.triggerEvent('onProgress', count)
      temp.push(Date.now() - this.startTime)
      this.setState({ stack: temp })
      count++
      if (count === 359) {
        clearInterval(timer)
        const score = Date.now() - this.startTime
        this.setState({ score: score, running: false, stack: [] })
        this.triggerEvent('onComplete', score)
      }
    }, 1)
  }

  render () {
    const { autorun, silent } = this.props
    const stack = this.state.stack.map((li, index) => <ProgressBit key={index} index={index} />)
    return (
      <Container visible={!silent}>
        <Header>
          <span>JuiceMark</span>
          <span>{this.state.score ? `Score: ${this.state.score}` : this.state.running ? 'running test...' : null}</span>
        </Header>
        { !autorun && <Button busy={this.state.running} onClick={this.run.bind(this)} /> }
        <Meter>
          <ProgressContainer>
            { stack }
          </ProgressContainer>
        </Meter>
      </Container>
    )
  }
}

export default Juicemark
