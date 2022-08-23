import React from 'react'
import { Link } from 'react-router-dom'
export default function Header(props) {
  const myObject = {
    marginTop: '10px',
    marginLeft: '5px'
  }
  // const toggleClick=()=>{
  //   if(mode==='light'){
  //     setMode('dark')
  //     props.showAlert('Dark mode has been enabled','success')
  //     document.body.style.backgroundColor='#1c1c2c'
  //   }
  //   else{
  //     setMode('light')
  //     props.showAlert('Light mode has been enabled','success')
  //     document.body.style.backgroundColor='white'
  //   }
    
  // }
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className={`navbar-brand text-${props.mode === 'light' ?'dark' :'light'}`} to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/about">About</Link>
            </li>
            <li className="nav-item" style={myObject}>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleClick}/>
                <label className={`form-check-label text-${props.mode==='light'?'dark':'light'} `} htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'Dark Mode':'Light Mode'}</label>
              </div>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}
