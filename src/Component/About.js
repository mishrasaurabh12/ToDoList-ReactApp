import React from 'react'

function About(props) {
    return (
        <div className='container my-4'>
            <h3 className={`text-${props.mode==='light'?'dark':'light'}`}>About My To Do List</h3>
            <p className={`text-${props.mode==='light'?'dark':'light'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quo itaque nisi iste rerum? At laboriosam fugiat inventore laudantium quaerat assumenda possimus perferendis, excepturi facilis provident officia soluta dolorem, beatae reiciendis animi!</p>
        </div>
    )
}

export default About