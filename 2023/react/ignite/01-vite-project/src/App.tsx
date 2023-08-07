import { Header, Sidebar, Post } from "@Components/index"
import styles from './App.module.css';
import './global.css';

import { PostType } from '@Components/Post';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/54908803?v=4',
      name: 'Leonardo Barbosa',
      role: 'Web developer'
    },
    content: [
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, sunt saepe.'},
      {type: 'link', content: 'github/leoobarbosa2'},
      {type: 'paragraph', content: 'Veniam adipisci aspernatur numquam atque cupiditate doloribus ipsa optio error necessitatibus'},
      {type: 'paragraph', content: 'itaque rem, ex, iure earum consequatur possimus quia!'}
    ],
    publishedAt: new Date('2023-03-13 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/4248081?v=4',
      name: 'Filipe Deschamps',
      role: 'Developer'
    },
    content: [
      {type: 'paragraph', content: 'Porem ipsum dolor sit amet consectetur adipisicing elit. Esse, sunt saepe.'},
      {type: 'link', content: 'https://github/leoobarbosa2'},
      {type: 'paragraph', content: 'Zeniam adipisci aspernatur numquam atque cupiditate doloribus ipsa optio error necessitatibus'},
      {type: 'paragraph', content: 'aataque rem, ex, iure earum consequatur possimus quia!'}
    ],
    publishedAt: new Date('2023-03-13 20:00:00')
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/8060102?v=4',
      name: 'Erick Wendel',
      role: 'Educator'
    },
    content: [
      {type: 'paragraph', content: 'Zorem ipsum dolor sit amet consectetur adipisicing elit. Esse, sunt saepe.'},
      {type: 'link', content: 'https://github/leoobarbosa2.png'},
      {type: 'paragraph', content: 'Teniam adipisci aspernatur numquam atque cupiditate doloribus ipsa optio error necessitatibus'},
      {type: 'paragraph', content: 'iitaque rem, ex, iure earum consequatur possimus quia!'}
    ],
    publishedAt: new Date('2023-03-20 20:00:00')
  }
]

function App() {
  return (
    <>
    <Header />
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post => (
          <Post
            key={post.id}
            post={post}
          />
        ))}
      </main>
    </div>
    </>
  )
}

export default App
