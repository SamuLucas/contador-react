import React, {Component} from 'react'
import './App.css'

class Cont extends Component{

  state = {
    num : 0
  }
  add = ()=>{
    if( this.state.num < 10){
      this.setState({
        num : this.state.num + 1
      
      })
      
    } 
  }
  remover = ()=>{
    if(this.state.num > 0){
      this.setState({
        num :this.state.num -1
      })
    }
  }
  
  clean = () =>{
    if(this.state.num != 0){
      this.setState({
        num : this.state.num = 0
      })
    }
  }

  render(){
 
    return (
    <section className='encapsuladora-geral'>
    <div className='encapsuladora-title'>
    <h1 className='title'>Contador :</h1>
    
    </div>
  <div className='encapsuladora-button'>
  <button className='subtitle'>{this.state.num}</button>
    <button className='incremento'onClick={this.add}>+</button>
    <button className='decremento'onClick={this.remover}>-</button>
    <button className='zerar'onClick={this.clean}>C</button>
    <button className='nada'></button>
    </div>
    </section>
    
    )
}
}
export default Cont
