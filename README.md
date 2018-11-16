# JuiceMark

Light-weight React component for testing browser performance.

##### About
This very simple benchmark puts some pressure on DOM/state rendering in order to determine a rough estimation about the client-side performance. Smaller number = faster client.

## Install

Clone the repository
`git clone https://github.com/moreyes-studio/juicemark.git`

Install everything
`yarn`

Run the app in the development mode
`yarn start`

To build it
`yarn build`

## Usage

Import to your project
`import { Juicemark } from './Juicemark'`

Add to render function
```<Juicemark />```

## Options

##### `autorun`
`true` Start the test automatically on component mount
`false` Display start button

##### `silent`
`true` Benchmarking is invisible (score becomes smaller)
`false` Benchmark meter gets displayed (score becomes greater)

## Events

##### `onStart` 
Triggered when test begins

```
<Juicemark />
  autorun
  onStart={() => {
    console.log('Test started')
  }}
/>
```

##### `onComplete` 
Triggered when test ends. Returns the score.

```
<Juicemark />
  autorun
  onComplete={(score) => {
    console.log(`Performance score: ${score}`)
  }}
/>
```

##### `onProgress` 
Triggered at every step during the measurement. Return percentage value.

```
<Juicemark />
  autorun
  onProgress={(progress) => {
    console.log(`Progress: ${progress}%`)
  }}
/>

```

PS. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
