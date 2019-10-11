import React from 'react';

import './Greeting.css';

export default function Greeting() {
  return (
    <div className='Greeting-container'>
      <h1 className='welcome-header'>
        Welcome to the <br />{' '}
        <span
          className='emoji-span'
          role='img'
          aria-label='Church Building Emoji'
        >
          ⛪
        </span>{' '}
        *NEW*{' '}
        <span
          className='emoji-span'
          role='img'
          aria-label='Praying Hands Emoji'
        >
          🙏🏻
        </span>
        <br />
        Elkton Missionary Church <br /> Website!
      </h1>
      <h2 className='great-things-header'>
        <span
          className='emoji-span'
          role='img'
          aria-label='Clenched Teeth Face Emoji'
        >
          😬
        </span>
        Thank you for your patience while we spruce up the place.
        <span
          className='emoji-span'
          role='img'
          aria-label='Man Shrugging Emoji'
        >
          🤷🏻‍♂️
        </span>
      </h2>
      <h3 className='check-back-header'>
        <span
          className='emoji-span'
          role='img'
          aria-label='Nervous-Sweat Face Emoji'
        >
          😅
        </span>
        We hope you check back soon for the launch
        <span className='emoji-span' role='img' aria-label='Rocketship emoji'>
          🚀
        </span>
        of v1.0!
        <span
          className='emoji-span'
          role='img'
          aria-label='Birthday Celebration Face Emoji'
        >
          🥳
        </span>
      </h3>
      <h4 className='meantime-header'>
        In the meantime, check out our current website{' '}
        <span
          className='emoji-span pointing-emoji'
          role='img'
          aria-label='Right-Pointing Hand Emoji'
        >
          👉🏻
        </span>
        <a href='http://elktonmc.com' target='_blank' rel='noopener noreferrer'>
          here
        </a>
        !
      </h4>
    </div>
  );
}
