import React, { Component } from 'react'
import api from '../../services/api'

import { Link } from 'react-router-dom'

import { FaUserFriends } from 'react-icons/fa'

import { MdDelete, MdEdit } from 'react-icons/md'

import { Container, Header, Add, Table } from './styles'

export default class UsersList extends Component {
  state = {
    users: [],
  }

  async componentDidMount() {

    const response = await api.get('/users');

    this.setState({ users: response.data})

  }

  async componentDidUpdate(_, prevState){
    if(prevState.users !== this.state.users){
      prevState.users = this.state.users
    }
  }

  handleDelete = async (id) => {

    await api.delete(`/users/${id}`)

    this.setState({ users: this.state.users.filter(user => user._id !== id)})
  }
  
  render(){
    const { users } = this.state; 

    return (
      <Container>
        <Header>
          <FaUserFriends size={40}/>
          Listagem de usuários
        </Header>
        <Table>
          <tbody>
            {users.map( user => {
              return (
                <tr key={user._id}>
                  <td className="tdTitle">Nome</td><td>{user.name}</td>
                  <td className="tdTitle">Email</td><td>{user.email}</td>
                  <td className="tdTitle">Idade</td><td>{user.age}</td>
                  <td className="tdTitle">Profissão</td><td>{user.profession}</td>
                  <td><Link to={`/users/${user._id}`}>< MdEdit  size={20} color="#178"/></Link></td>
                  <td><button onClick={() => this.handleDelete(user._id)}>< MdDelete  size={20} color="#f00"/></button></td>
                </tr>
              )
            })}
          </tbody>
        </Table>
        <Add>
          <Link to="/">Adicionar novo usuário</Link>
        </Add>
      </Container>
    )
  }
}