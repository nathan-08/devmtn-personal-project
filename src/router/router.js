import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../components/Home/home.js'
import SEArule from '../components/SEArule/searule.js'
import Pricing from '../components/Pricing/pricing.js'
import Contact from '../components/Contact/contact.js'
import Regulatory from '../components/Regulatory/regulatory.js'

export default  (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/pricing' component={Pricing}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/searule' component={SEArule} />
            <Route path='/regulatory' component={Regulatory}/>
        </Switch>    
)