import React from 'react';

const Logo = ({ width = 160, height = 50 }) => (
  <svg 
    width={width} 
    height={height} 
    viewBox="0 0 250 60" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Aiveen Labs Logo</title>
    
    <defs>
      <linearGradient id="logo-teal-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0f766e" />
        <stop offset="100%" stopColor="#134e4a" />
      </linearGradient>
      <linearGradient id="logo-gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d2b582" />
        <stop offset="100%" stopColor="#b88c45" />
      </linearGradient>
    </defs>
    
    <g>
      {/* The 'A' shape */}
      <path 
        d="M25,50 L50,5 L75,50 L65,50 L50,25 L35,50 Z" 
        fill="url(#logo-teal-gradient)"
      />
      
      {/* The swoosh */}
      <path 
        d="M5,40 C30,30 70,30 95,40" 
        fill="none" 
        stroke="url(#logo-gold-gradient)" 
        strokeWidth="6" 
        strokeLinecap="round"
      />
    </g>
    
    {/* Company Name */}
    <text 
      x="105" 
      y="37" 
      fontFamily="sans-serif" 
      fontSize="28" 
      fill="#171717"
      fontWeight="bold"
    >
      Aiveen Labs
    </text>
  </svg>
);

export default Logo; 