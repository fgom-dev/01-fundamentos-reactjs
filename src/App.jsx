import { Header } from "./components/Header";

import style from './App.module.css'
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

export function App() {
  return ( 
    <div>
      <Header />   
      <div className={style.wrapper}>      
        <Sidebar /> 
        <main>
          <Post />
          <Post />
          <Post />
        </main>
      </div>  
    </div> 
  )
}
