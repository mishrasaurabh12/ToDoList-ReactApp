import React,{useState} from 'react'
function AddTodo(props) {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const titleChange=(event)=>{
       setTitle(event.target.value)
    }
    const descChange=(event)=>{
        setDesc(event.target.value)
     }
     const onSubmit=(e)=>{
       e.preventDefault();
       if(!title||!desc)
       {
        alert('Title or description cannot be blank')
       }
       else{
        props.addTodo(title,desc)
        setTitle('')
        setDesc('')
       }
     }
    return (
        <div className="container my-4">
            <h3 className={`text-${props.mode==='light'?'dark':'light'}`}>Add Todo</h3>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className={`form-label text-${props.mode==='light'?'dark':'light'}`}>Todo Title</label>
                    <input type="text" className="form-control" id="title" aria-describedby="emailHelp" value={title} onChange={titleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className={`form-label text-${props.mode==='light'?'dark':'light'}`}>Todo Description</label>
                    <input type="text" className="form-control" id="desc" value={desc} onChange={descChange}/>
                </div>
                <button type="submit" className="btn btn-success btn-sm">Add</button>
            </form>
        </div>
    )
}

export default AddTodo