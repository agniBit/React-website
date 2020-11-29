import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Shop by category</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Bike Redore_wwwroot_uploads_svg_red_4AAGR1D-bike-red-vector.svg'
              text='All batteries'
              label='Bike batteries'
              path='/services'
            />
            <CardItem
              src='images/koconmus_Syrena_Sport.svg'
              text='Car batteries'
              label='Car batteries'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Truck.svg'
              text='Truck Batteries'
              label='Truck Batteries'
              path='/services'
            />
            <CardItem
              src='images/sweet_home.svg'
              text='Truck Batteries'
              label='Inverter Batteries'
              path='/products'
            />
            <CardItem
              src='images/battery.svg'
              text='Truck Batteries'
              label='All Batteries'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
