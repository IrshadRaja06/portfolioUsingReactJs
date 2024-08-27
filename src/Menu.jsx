import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <div className='py-lg-5 py-md-5 m-0 p-0 position-fixed'>
      <h1 className='fs-1 d-lg-block d-md-block d-none ps-4'>Irshad Raja</h1>
      <div className='py-lg-5 py-md-5 d-lg-block d-md-block d-flex justify-content-around flex'>
        <Link to="/" className='d-flex text-decoration-none text-white fs-4'>
          <i className="fa-solid fa-house pt-1 text-info"></i>
          <p className='px-4 d-lg-block d-md-block d-none'>Home</p>
        </Link>
        <Link to="/work" className='d-flex text-decoration-none text-white fs-4'>
          <i className="fa-solid fa-file pt-1 pe-1 text-warning"></i>
          <p className='px-4 d-lg-block d-md-block d-none'>Work</p>
        </Link>
        <Link to="/contact" className='d-flex text-decoration-none text-white fs-4 d-block d-md-none  '>
          <i className="fa-solid fa-phone pt-1 text-success"></i>
          <p className='px-4 d-lg-block d-md-block d-none'>Contact</p>
        </Link> 
      </div>
    </div>
  );
}

export default Menu;
