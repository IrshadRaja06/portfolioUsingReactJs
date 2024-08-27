import React, { useState } from 'react';
import './Bcard.css';

const Bcard = (props) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className='text-center'>
      <h1 className=" text-start" id='heading'>{props.title}</h1>
      <img src={props.img} alt='Project' className='img-fluid' /><br />
      <div className='text-start' id='heading'>
        <i
          className={`fa-solid fa-heart ${isLiked ? 'text-danger' : ''}`}
          onClick={handleLikeClick}
        id='i' ></i>
       <a href={props.link} target='_blank'><i class="fa-solid fa-share text-white" id='i'></i></a>
       <a href={props.github} target='_blank'><i class="fa-brands fa-github text-white" id='i'></i></a>
      </div>
        <div className="row d-flex justify-content-center text-start">
          <p className='col-lg-9' id='p'>{props.p}</p>
        </div>
      </div>
  );
};

export default Bcard;
