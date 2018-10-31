import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import About from './paginas/About/About'
import Contato from './paginas/Contato/Contato'
import Conta from './paginas/Conta/Conta';
import Login from './paginas/Login/Login'
import './index.css'

function App(){
    return(
        <div className='app'>
      {} 
      <Switch>
         <Route path="/"exact component={Login}/>
         <Route path='/conta' component={Conta}/>
         <Route path='/login' component={Login}/>
         <Route path='/about' component={About}/>
         <Route path='/contato' component={Contato}/>
      
      </Switch>
       
      </div>
    )
}

ReactDOM.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>,
     document.getElementById('projeto')
)
