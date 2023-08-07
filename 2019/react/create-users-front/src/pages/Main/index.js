import React, { Component } from 'react';
import api from '../../services/api'

import { Link } from 'react-router-dom'

import { FaUserPlus } from 'react-icons/fa'
 
import { Container, Header, Form, ReturnButton } from  './styles'

export default class Main extends Component {
  state = {
    newName: '',
    newAge: '',
    newEmail: '',
    newProfession: '',
  };

  handleSubmit = async e => {
    e.preventDefault()

    const { newName, newAge, newEmail, newProfession } = this.state;
    
    await api.post('/users', {
      name: newName,
      age: newAge,
      email: newEmail,
      profession: newProfession,
    })

    this.setState({
      newName: '',
      newAge: '',
      newEmail: '',
      newProfession: '',
    })

    this.props.history.push('/users')
  }

  handleInputChange = e => {
    if(e.target.id === 'name'){
      this.setState({ newName: e.target.value})
    } else if(e.target.id === 'age'){
      this.setState({ newAge: e.target.value})
    } else if(e.target.id === 'email'){
      this.setState({ newEmail: e.target.value})
    } else if(e.target.id === 'profession') {
      this.setState({ newProfession: e.target.value})
    }
  }

  render(){
    const { newAge, newEmail, newName, newProfession } = this.state;

    return (
      <Container>
      <Header>
      <FaUserPlus color="#000" size={40} />
      <span>Adicionar usuários</span>
      </Header>
        <Form onSubmit={this.handleSubmit} action="">
          <input id="name" type="text" placeholder="Informe o nome" 
          value={newName} onChange={this.handleInputChange}/><br/>
          <input id="age" type="number" placeholder="Informe a Idade" 
          value={newAge} onChange={this.handleInputChange}/><br/>
          <input id="email" type="text" placeholder="Informe o Email" 
          value={newEmail} onChange={this.handleInputChange}/><br/>
          <input id="profession" type="text" placeholder="Informe a profissão" 
          value={newProfession} onChange={this.handleInputChange}/><br/>
          <button type="submit" >Adicionar</button>
        </Form>
        <ReturnButton>
          <Link to="/users">Voltar a listagem</Link>
        </ReturnButton>
      </Container>
    )
  }
}