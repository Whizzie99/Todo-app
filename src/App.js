import { useEffect, useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import firebase from 'firebase';


import './App.css';
import Todo from './Todo';
import db from './firebase';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // fetch data from firestore when app loads
  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []);

  const addTodo = (e) => {
    e.preventDefault();

    db.collection('todos').add({
      todo: input,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setTodos([...todos, input]);
    setInput('');
  }


  return (
    <div className="App">
      <h1>Hello World</h1> 
      
      
      <form>
        <FormControl>
          <InputLabel>write a todo</InputLabel>
          <Input 
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)} 
          />
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add todo
        </Button>
      </form>

      <div> 
        {todos.map(todo => (
          <Todo todo={todo}/>
        ))}
      </div>
    </div>
  );
}

export default App;
