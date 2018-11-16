import React from 'react'
import { render } from 'react-dom'
import { Juicemark } from './Juicemark'
import './styles.css'

const App = () => (
  <div id='app'>
    <Juicemark
      autorun={false}
      silent={false}
      onStart={() => {
        // console.log('Test started')
      }}
      onProgress={(progress) => {
        // console.log(`Progress: ${progress}%`)
      }}
      onComplete={(score) => {
        // console.log(`Performance score: ${score}`)
      }}
    />
  </div>
)

render(<App />, document.getElementById('root'))
