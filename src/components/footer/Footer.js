import React from 'react';

import './Footer.css';

export default function Footer() {
  return (
    <div className='Footer-container'>
      <p className='footer-text'>
        Designed, Built, &{' '}
        <a
          className='footer-link-maintained'
          href='https://github.com/elkton-mc'
          target='_blank'
          rel='noopener noreferrer'
        >
          Maintained
        </a>{' '}
        by{' '}
        <a
          className='footer-link-tico'
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
