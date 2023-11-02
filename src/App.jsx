/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src="src/assets/react-logo.png" width="40px"/>
        <h1>Fun Facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was first released in 2013</li>
            <li>Was first released in 2013</li>
            <li>Was first released in 2013</li>
        </ul>
    </>
  )
}

export default App
