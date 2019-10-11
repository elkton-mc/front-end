import React from 'react';

import './Greeting.css';

export default function Greeting() {
  return (
    <div className='Greeting-container'>
      <h1 className='welcome-header'>
        Welcome to the *REVAMPED*
        <br />
        Elkton Missionary{' '}
        <span
          className='emoji-span'
          role='img'
          aria-label='Church building emoji'
        >
          ⛪
        </span>
        Church
        <span
          className='emoji-span'
          role='img'
          aria-label='Praying hands emoji'
        >
          🙏🏻
        </span>{' '}
        Website!
      </h1>
      <h2 className='great-things-header'>
        <span
          className='emoji-span'
          role='img'
          aria-label='Clenched teeth face emoji'
        >
          😬
        </span>
        Unfortunately, great things take time.
        <span
          className='emoji-span'
          role='img'
          aria-label='Man shrugging emoji'
        >
          🤷🏻‍♂️
        </span>
      </h2>
      <h3 className='check-back-header'>
        <span
          className='emoji-span'
          role='img'
          aria-label='Nervous drop of sweat face emoji'
        >
          😅
        </span>
        Check back soon for the launch
        <span className='emoji-span' role='img' aria-label='Rocketship emoji'>
          🚀
        </span>
        of v1.0!
        <span
          className='emoji-span'
          role='img'
          aria-label='Celebration face emoji'
        >
          🥳
        </span>
      </h3>
      <h4 className='meantime-header'>
        In the meantime, check out our current website{' '}
        <a href='http://elktonmc.com' target='_blank' rel='noopener noreferrer'>
          here
        </a>
        !
      </h4>
    </div>
  );
}
