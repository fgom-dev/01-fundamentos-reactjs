import { Header } from "./components/Header";

import style from './App.module.css'
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/fgom-dev.png',
      name: 'Fernando Gomes',
      role: 'Web Developer'
    },
    content :[
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'anchor', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-06-27 22:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/jorge-lba.png',
      name: 'Jorge Alegretti',
      role: 'Tech Lead'
    },
    content :[
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'anchor', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-06-25 18:00:00'),
  },
]

export function App() {
  return ( 
    <div>
      <Header />   
      <div className={style.wrapper}>      
        <Sidebar /> 
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>  
    </div> 
  )
}
