import React from 'react';
import styles from './Disclaimer.module.css';

const Disclaimer = ({ children }) => {
  return (
    <div className={styles.disclaimer}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className={styles.icon}
      >
        <polygon
          style={{ fill: '#FFA418' }}
          points="0,477.703 256,477.703 289.391,256 256,34.297"
        ></polygon>
        <polygon
          style={{ fill: '#FF8A1E' }}
          points="256,34.297 256,477.703 512,477.703"
        ></polygon>
        <g>
          <circle style={{ fill: '#324860' }} cx="256" cy="405.359" r="16.696"></circle>
          <rect
            x="239.304"
            y="177.185"
            style={{ fill: '#324860' }}
            width="33.391"
            height="178.087"
          ></rect>
        </g>
      </svg>
      <div className={styles.text}>{children}</div>
    </div>
  );
};

export default Disclaimer;
