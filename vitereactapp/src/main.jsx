import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const ReactElement = React.createElement(
  'a',                // declear type
  { href: 'https://google.com', target: '_blank'},     //pass object
  'click me to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)

//  it is used for object pass

// ReactDOM.createRoot(document.getElementById('root')).render(
//   ReactElement
// )

