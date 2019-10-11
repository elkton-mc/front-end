import React from 'react';

import './Greeting.css';

export default function Greeting() {
  return (
    <div className='Greeting-container'>
      <h1 className='welcome-header'>
        Welcome to the *REVAMPED*
        <br />
        Elkton Missionary Church Website!
      </h1>
      <h2 className='great-things-header'>
        <span
          className='emoji-span'
          role='img'
          aria-label='man shrugging emoji'
        >
          🤷🏻‍♂️
        </span>
        Unfortunately, great things take time.
        <span
          className='emoji-span'
          role='img'
          aria-label='nervous sweat face emoji'
        >
          😅
        </span>
      </h2>
      <h3 className='check-back-header'>
        Check back soon for the launch
        <span className='emoji-span' role='img' aria-label='rocketship emoji'>
          🚀
        </span>
        of v1.0!
        <span
          className='emoji-span'
          role='img'
          aria-label='celebration face emoji'
        >
          🥳
        </span>
      </h3>
      <h4 className='meantime-header'>
        In the meantime, make sure to check out our current website{' '}
        <a href='http://elktonmc.com' target='_blank' rel='noopener noreferrer'>
          here
        </a>
        !
      </h4>
    </div>
  );
}
