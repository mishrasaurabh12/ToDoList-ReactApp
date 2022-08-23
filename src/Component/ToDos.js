import React from 'react'
import ToDoItem from './ToDoItem'
function ToDos(props) {
  return (
    <div className="container my-4">
        <h3 className={`text-center my-4 text-${props.mode==='light'?'dark':'light'}`}>MY TO-DO LIST</h3>
    <div className={`row`}>
        {props.todo.length===0?<p className={`text-${props.mode==='light'?'dark':'light'}`}>"NO TO DO TO DISPLAY"</p>:props.todo.map((element)=>{
        return <div className="col-md-4" key={element.sno}>
             <ToDoItem title={element.title} desc={element.desc} todo={element} delete={props.delete}/>
        </div>
      })}
    </div>
    </div>
  )
}

export default ToDos
