import React, { Component } from 'react'

import './PostList.css'

import PostItem from './PostItem'

import avatar1 from '../assets/pessoa1.png'
import avatar2 from '../assets/pessoa2.png'
import avatar3 from '../assets/pessoa3.png'
import avatar4 from '../assets/pessoa4.png'
import avatar5 from '../assets/pessoa5.png'

class PostList extends Component{
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Marcos Ford",
          avatar: avatar1
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguem sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
            name: "Diego Fernandes",
            avatar: avatar5
          },
          content: "Entre em contato conosco caso tenha interesse para que possamos te orientar melhor a respeito"
          },
          {
            id: 2,
            author: {
              name: "Ana Dourado",
              avatar: avatar2
            },
            content: "Estou procurando uma forma de me destacar pra conseguir uma vaga também"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Juliano Bohr",
          avatar: avatar4
        },
        date: "20 Sep 2019",
        content: "Galera, alguem me indica algum conteúdo para leitura sobre Sequelize?",
        comments: [
          {
            id: 1,
            author: {
            name: "João Paulo",
            avatar: avatar3
          },
          content: "Tem um conteúdo bacana no blog da rocket, da uma olhada: https://blog.rocketseat.com.br/nodejs-express-sequelize/"
          },
        ]
      },
      {
        id: 3,
        author: {
          name: "Ana Dourado",
          avatar: avatar2
        },
        date: "01 Nov 2019",
        content: "Onde encontro conteudo gratuito e de qualidade sobre Javascript?",
        comments: [
          {
            id: 1,
            author: {
            name: "João Paulo",
            avatar: avatar3
          },
          content: "Se cadastra e consome os conteudos do Skylab da rocketseat, muito massa!!"
          }
        ]
      }
    ]
  }

  render(){
    const { posts } = this.state

    console.log(this.state)
    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    )
  }
}

export default PostList