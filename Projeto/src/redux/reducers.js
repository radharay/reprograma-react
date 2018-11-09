import { combineReducers} from 'redux'

let usuarioInicial = null

const json = localStorage.getItem('usuario')
if (json) {
  usuarioInicial = JSON.parse(json)
}

function usuario(state = usuarioInicial, action){
    switch(action.type){
        case 'LOGA_USUARIO':
        const usuarioLogado = action.dados
        const json = JSON.stringify(usuarioLogado)
      localStorage.setItem('usuario', json)
        return usuarioLogado
        localStorage.removeItem('usuario')
        case 'DESLOGA_USUARIO':
        const usuarioDeslogado = null
        return usuarioDeslogado
        default:
        return state
    }
}

function postits(state = [], action){ // array vazia
    switch(action.type){
        default: 
        return state
    }
}

// agora temos dois redutores, usuario e postits
//combinar os dois

const reducers = combineReducers({
    usuario: usuario, // propriedade:valor
    postits: postits
})

export default reducers
