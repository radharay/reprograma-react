import React from 'react'
import './Campo.css'


class Campo extends React.Component { // class campo, herda tudo do component react, para component class usar
   constructor(props){
     super(props)
     this.state = {
       erro: 'Campo obrigatório'
     }

    //  this.valida = this.valida.bind(this)

   }

   valida = (evento) =>{
     const alvo = evento.target

     if (alvo.name === 'nome' && alvo.value === ''){
      //  this.state.erro = 'Campo obrigatório'
      const state ={
        erro: 'Campo obrigatório'
      }
      this.setState(state)
     }


   }


   render(){
    return (
      <div>
      <input 
        id={this.props.id}
        className="campo"
        type={this.props.type}
        name={this.props.name}
        placeholder={this.props.placeholder}
        onChange={this.valida}
      />

      <p class="grupo__erro">{this.state.erro}</p>

      </div>
    )

   }
}



export default Campo