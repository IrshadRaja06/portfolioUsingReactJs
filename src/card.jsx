import React from 'react'
import './card.css'

const card = (props) => {
  return (
    <div className='p-3 text-white text-center'>
      <div className="skill p-3 fs-1 rounded-circle">
        <a href={props.link} target='_blank' className=''><i className={props.img} style={{color:props.color,width:'50px'}}></i></a>
      </div>
      <p className='p'>{props.p}</p>
    </div>
  );
}

export default card
