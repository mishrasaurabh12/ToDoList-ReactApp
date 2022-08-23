import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
    const myObject={
        position: 'relative',
    bottom: '-245px',
    width: '100%',
    height: '60px',
    left: '-15px'
    }
  return (
    <div>
    <div className="container">
  <footer className="py-3 my-4" style={myObject}>
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">Home</Link></li>
      <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">Features</Link></li>
      <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">Pricing</Link></li>
      <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">FAQs</Link></li>
      <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">About</Link></li>
    </ul>
    <p className="text-center text-muted">© 2022 Company, Inc</p>
  </footer>
</div>
    </div>
  )
}

export default Footer