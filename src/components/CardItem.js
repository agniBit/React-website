import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='card_container'>
        <Link className='card_link' to={props.path} >
          <div className='card_img'>
            <h5>{props.text}</h5>
            <img
              alt={props.alt}
              src={props.src}
            />
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
