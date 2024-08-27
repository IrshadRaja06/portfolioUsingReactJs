import React from 'react'
import Card from './card'
import './Header.css'


const Header = () => {
  return (
    <div>
      <div className="scroll">
      <div className='d-flex'>
      <Card img='fa-brands fa-html5' p='HTML'/>
          <Card img='fa-brands fa-css3-alt' p='CSS'/>
          <Card img='fa-brands fa-react' p='REACT'/>
          <Card img='fa-brands fa-bootstrap' p='BOOTSTRAP'/>
           <Card img='fas fa-database' p='MONGODB'/>
      </div>
      </div>
      </div>
  )
}

export default Header
  