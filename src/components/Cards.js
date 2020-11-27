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
              src='images/bike.gif'
              text='All batteries'
              label='Bike batteries'
              path='/services'
            />
            <CardItem
              src='images/car2.gif'
              text='Car batteries'
              label='Car batteries'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/truck.gif'
              text='Truck Batteries'
              label='Truck Batteries'
              path='/services'
            />
            <CardItem
              src='images/home2.gif'
              text='Truck Batteries'
              label='Inverter Batteries'
              path='/products'
            />
            <CardItem
              src='images/home2.gif'
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
