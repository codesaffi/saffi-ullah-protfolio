import React from 'react';
import './searchbar.css';
import vid1 from '../assets/Screen Recording 2024-07-15 231551.mp4'

const Todolist = () => {
  return (
    <article className="article2">
  <header>
    <h2 className="h2 article-title">Build a To-Do List with Redux Toolkit in React</h2>
  </header>
  <header className="article-header">
    <h1 className="article-title1">Creating a To-Do List in React Using Redux Toolkit</h1>
    <div className="article-meta">
      <span className="article-date">Published: July 15, 2024</span>
      <span className="article-author">By Saffi Ullah</span>
    </div>
  </header>
  <section className="article-content">
    <p>
      In this tutorial, we'll create a to-do list application in React using Redux Toolkit for state management. Redux Toolkit simplifies the process of writing Redux logic and reduces boilerplate code. We'll go through setting up the project, creating slices, and implementing the to-do list functionality.
    </p>

    <h2>Step-by-Step Guide</h2>

    <h3>Step 1: Setting Up the Redux Store</h3>
    <p>
      First, we'll set up the Redux store using Redux Toolkit's <code>configureStore</code>. This will allow us to manage the application state centrally.
    </p>
    <div className="service-item1 code-example">
      <pre>
        <code>
{`
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
`}
        </code>
      </pre>
    </div>

    <h3>Step 2: Creating the Todo Slice</h3>
    <p>
      Next, we'll define a slice of the state for our to-dos using <code>createSlice</code> from Redux Toolkit. This will include our initial state, reducers, and actions.
    </p>
    <div className="service-item1 code-example">
      <pre>
        <code>
{`
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
`}
        </code>
      </pre>
    </div>

    <h3>Step 3: Creating the Todo List Component</h3>
    <p>
      Now, we'll create the main component for our to-do list. This component will include an input field for adding new to-dos, and it will display the list of to-dos with options to toggle and remove them.
    </p>
    <div className="service-item1 code-example">
      <pre>
        <code>
{`
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from './todoSlice';

function TodoList() {
  const [input, setInput] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div className="TodoList">
      <h1>Todo List</h1>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Add a new task" 
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
`}
        </code>
      </pre>
    </div>

    <h3>Step 4: Setting Up the App Component</h3>
    <p>
      We'll now set up the <code>App</code> component to include the <code>TodoList</code> component.
    </p>
    <div className="service-item1 code-example">
      <pre>
        <code>
{`
import React from 'react';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList />
      </header>
    </div>
  );
}

export default App;
`}
        </code>
      </pre>
    </div>

    <h3>Step 5: Rendering the Application</h3>
    <p>
      Finally, we'll render our application using ReactDOM and wrap our app with the <code>Provider</code> component to pass down the Redux store.
    </p>
    <div className="service-item1 code-example">
      <pre>
        <code>
{`
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './store.js';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
`}
        </code>
      </pre>
    </div>

    <h2>Conclusion</h2>
    <p>
      In this tutorial, we have built a to-do list application using React and Redux Toolkit. We covered setting up the Redux store, creating slices, and implementing the to-do list functionality. Redux Toolkit helps simplify state management and reduces boilerplate code.
    </p>
    <p>
      Feel free to expand this to-do list application further by adding features like editing tasks, filtering tasks by their completion status, or integrating with a backend API to persist the tasks.
    </p>
    <br />
    <p>Below is a video demo of the output:</p>
    <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
      <video
        width="100%"
        height="auto"
        controls autoPlay muted
        style={{ display: 'block', margin: '0 auto' }}
      >
        <source src={vid1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <h3>Visit the GitHub repository for more information:</h3>
    <p>https://github.com/codesaffi/to-do-list</p>
  </section>
    </article>

  )
}

export default Todolist