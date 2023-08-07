import React, { Component } from 'react';
import api from '../../services/api';

import { FaUserEdit } from 'react-icons/fa'

import { Link } from 'react-router-dom'

import { Header , Container, Form, CancelButton } from './styles';

export default class UniqueUser extends Component {
  state = {
    newName: '',
    newAge: '',
    newEmail: '',
    newProfession: '',
  }

  async componentDidMount() {

    const response = await api.get(`/users/${this.props.match.params.id}`)

    const {name, age, email, profession} = response.data

    this.setState({ 
      newName: name,
      newAge: age,
      newEmail: email,
      newProfession: profession,
    })

  }

  handleSubmit = async e => {
    e.preventDefault()

    const id = this.props.match.params.id;

    const { newName, newAge, newEmail, newProfession } = this.state;
    
     await api.put(`/users/${id}`, {
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
    const { 
      newAge,
      newEmail,
      newProfession,
      newName,
    } = this.state
    return (
      <>
      <Container>
      <Header>
        <FaUserEdit size={40} color="#000" />
        <span> Atualizar dados do usuário</span>
      </Header>
      <Form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Nome</label>
          <input id="name" type="text" placeholder="Informe o nome" 
          value={newName}  onChange={this.handleInputChange}/><br/>
        <label htmlFor="age">Idade</label>
          <input id="age" type="number" placeholder="Informe a Idade" 
          value={newAge} onChange={this.handleInputChange}/><br/>
        <label htmlFor="email">Email</label>
          <input id="email" type="text" placeholder="Informe o Email" 
          value={newEmail} onChange={this.handleInputChange}/><br/>
        <label htmlFor="profession">Profissão</label>
          <input id="profession" type="text" placeholder="Informe a profissão" 
          value={newProfession} onChange={this.handleInputChange}/><br/>
          <button type="submit" >Atualizar</button>
      </Form>
      <CancelButton>
        <Link to ="/users">Cancelar</Link>
      </CancelButton>
      </Container>
      </>
    );
  }
}
