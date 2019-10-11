import React from 'react';

import './Footer.css';

export default function Footer() {
  return (
    <div className='Footer-container'>
      <p className='Footer-text'>
        Designed, Created, & Maintained by{' '}
        <a
          href='https://hellotico.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          Tico S. Thepsourinthone
        </a>{' '}
        © 2019
      </p>
    </div>
  );
}
