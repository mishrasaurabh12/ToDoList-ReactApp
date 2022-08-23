import './App.css';
import Header from './Component/Header';
import ToDos from './Component/ToDos';
import React, { useState, useEffect } from 'react';
import Footer from './Component/Footer';
import AddTodo from './Component/AddTodo';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './Component/About';
import Alert from './Component/Alert';
function App() {
  let initTodo;
  if (localStorage.getItem('todo') === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem('todo'));
  }
  const onDelete = (del) => {
    setTodo(todo.filter((e) => {
      return e !== del
    }))
    localStorage.setItem("todo", JSON.stringify(todo));
  }
  const addTodo = (title, desc) => {
    let sno;
    if (todo.length === 0) {
      sno = 0;
    }
    else {
      sno = todo[todo.length - 1].sno + 1;
    }
    let myTodo = {
      title: title,
      desc: desc,
      sno: sno
    }
    setTodo([...todo, myTodo])
    localStorage.setItem('todo', JSON.stringify(todo))
  }
  const [todo, setTodo] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo));
  }, [todo])
  const [alert, setAlert] = useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  }
  const [mode, setMode] = useState(`light`)
  const toggleClick=()=>{
    if(mode==='light'){
      setMode('dark')
      showAlert('Dark mode has been enabled','success')
      document.body.style.backgroundColor='#1c1c2c'
    }
    else{
      setMode('light')
      showAlert('Light mode has been enabled','success')
      document.body.style.backgroundColor='white'
    }
    
  }
  return (
    <>
      <Router>
        <Header title="My To Do List" showAlert={showAlert} mode={mode} toggleClick={toggleClick}/>
        <Alert alert={alert}/>
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} mode={mode}/>
                <ToDos todo={todo} delete={onDelete} mode={mode}/>
              </>
            )
          }}>
          </Route>
          <Route exact path="/about" render={()=>{
            return (
              <>
              <About/>
              </>
            )
          }}>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>

  );
}

export default App;
