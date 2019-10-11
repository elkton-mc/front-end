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
        >
          Maintained
        </a>{' '}
        by{' '}
        <a className='footer-link-tico' href='https://hellotico.com'>
          Tico S. Thepsourinthone
        </a>{' '}
        © 2019
      </p>
    </div>
  );
}
