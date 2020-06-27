import React from 'react'
import {
  Switch,
  Link,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Bio from './pages/Bio'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Bio />
          </Route>
          <Route path="/Portfolio">
            <Portfolio />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
        <Footer/>
      </>
    </Router>
  )
}

export default App
