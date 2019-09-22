import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Dashboard from './dashboard/Dashboard'
import Expenses from './expenses/Expenses'
import Goals from './goals/Goals'

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar/>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/expenses" component={Expenses}/>
        <Route exact path="/goals" component={Goals}/>
        <Footer/>
      </Router>
    </Fragment>
  )
}

export default App
