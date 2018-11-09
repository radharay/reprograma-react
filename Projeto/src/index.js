import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route  } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Navbar from './componentes/Navbar/Navbar'
import Home from './paginas/Home/Home'
import QuemSomos from './paginas/QuemSomos/QuemSomos'
import Contato from './paginas/Contato/Contato'
import Conta from './paginas/Conta/Conta'
import Login from './paginas/Login/Login'
import NaoEncontrada from './paginas/NaoEncontrada/NaoEncontrada'
import './index.css'

// let usuario = null

// const json = localStorage.getItem('usuario')
// if (json) {
//   usuario = JSON.parse(json)
// }

// function logaUsuario(dados) {
//   const json = JSON.stringify(dados)
//   localStorage.setItem('usuario', json)
//   usuario = dados
// }

// function deslogaUsuario() {
//   localStorage.removeItem('usuario')
//   usuario = null
// }

function App() {


  return (
    <div className="app">
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/conta" component={Conta} />
        <Route path="/quem-somos" component={QuemSomos} />
        <Route path="/contato" component={Contato} />
        <Route component={NaoEncontrada} />
      </Switch>
    </div>
  )
}

// const state ={
//   usuario: {email: camila@email.com}
// }

// function passaDadosDoEstadoParaMeuComponente(state) {
//   const props = {
//     usuario: state.usuario
//   }
//   return props
// }

// function passaFuncoesQueDisparamAcoesViaProps(dispatch) {
//   const props = {
//     logaUsuario: (dados) => {
//       const acao = {
//         type: 'LOGA_USUARIO',
//         dados: dados
//       }
//       dispatch(acao)
//     },
//     deslogaUsuario: () => {
//       const acao = {
//         type: 'DESLOGA_USUARIO',
//       }
//       dispatch(acao)
//     }
//   }
//   return props
// }

// const conectaNaStore = connect(passaDadosDoEstadoParaMeuComponente, passaFuncoesQueDisparamAcoesViaProps)
// // {/* <App usuario = {usuario} logaUsuario={() =>} deslogaUsuario={()=>} /> */}

// const AppConectada = withRouter(conectaNaStore(App))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('projeto')
)
//provider: fornece a store para todos os componentes filhas