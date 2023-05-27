import React, { Component } from 'react'
import './index.css'

class Biscoito extends Component{
  constructor(props){
    super(props)
    this.state = {
      textoFrase: ''
    }

    this.quebraBiscoito = this.quebraBiscoito.bind(this)

    this.frases = ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
    'O riso é a menor distância entre duas pessoas.', 
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.']

  }

  quebraBiscoito(){
    let state = this.state
    let random = Math.floor(Math.random() * this.frases.length)

    state.textoFrase = '"' + this.frases[random] + '"'
    this.setState(state)
  }

  render(){
    return(
      <div className='container'>
        <img src={require('../../assets/biscoito.png')} alt="biscoito da sorte" />
        
        <Botao nome="Abrir Biscoito" acaoBtn={this.quebraBiscoito} />
        <h3>{this.state.textoFrase}</h3>
      </div>
    )
  }
}

class Botao extends Component {
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    )
  }
}

export default Biscoito
