import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [send, setSend] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/todos/')
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);

  const sendTodo = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/todos/", {
        title: send
      });
      // レスポンスのデータをtodosに追加して再レンダリング
      setTodos([...todos, response.data]);
      setSend(''); // フォーム入力をクリア
    } catch (error) {
      console.error('Error creating todo:', error);
    }
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form>
        <input
          type="text"
          onChange={(e) => setSend(e.target.value)}
          value={send}
        />
        <button onClick={(e) => sendTodo(e)}>追加</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li> // todoの内容を表示
        ))}
      </ul>
      <p>2025.1.1</p>
    </div>
  );
}

export default App;
