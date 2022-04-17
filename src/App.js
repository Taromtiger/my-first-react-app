import React, { useRef, useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/counter";
import "./styles/App.css"
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript 1', body: 'Description'},
    {id: 2, title: 'Javascript 2', body: 'Description'},
    {id: 3, title: 'Javascript 3', body: 'Description'},
  ]);

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addNewPost = (e) => {
    e.preventDefault()  

    const newPost = {
      id: Date.now(),
      title,
      body
    }
    setPosts([...posts, newPost])
    setTitle('')
    setBody('')

  }

  return (
    <div className="App">

      <form>
        {/*Керований компонент*/}
        <MyInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          placeholder="Назва поста"
        />

        {/*Некерований/Неконтрольовани й компонент*/}
        <MyInput 
          value={body}
          onChange={e => setBody(e.target.value)}
          type="text" 
          placeholder="Опис поста"
        />

        <MyButton onClick={addNewPost}>Створити пост</MyButton>

      </form>

      <PostList posts={posts} title="Пости про JS"/>

    </div>
  );
}

export default App;
