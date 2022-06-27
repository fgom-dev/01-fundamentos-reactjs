import { Header } from "./components/Header";

import style from './App.module.css'
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

export function App() {
  return (
    <>
      <Header />
      
      <div className={ style.wrapper }>
        <Sidebar />
        <Post />
      </div>
    </>
  )
}
