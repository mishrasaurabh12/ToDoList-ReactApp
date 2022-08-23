import React from 'react'

function ToDoItem(props) {
    return (
        <div>
            <div className="card text-center" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}.</p>
                    <button type="button" className="btn btn-danger" onClick={() => { props.delete(props.todo) }}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default ToDoItem
