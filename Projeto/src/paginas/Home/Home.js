import React from 'react'
import './Home.css'

function Home() {
  if (!props.usuario) {
    return <Redirect to="/login" />
  }
  return (
    <main className="home">

    </main>
  )
}
function passaDadosDoEstadoNoProps(state) {
  return {
    usuario: state.usuario
  }
}
 const conectaNaStore = connect(passaDadosDoEstadoNoProps)
 const HomeConectado = conectaNaStore(Home)
 export default HomeConectado 