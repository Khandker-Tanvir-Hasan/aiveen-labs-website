import React from 'react';

const Logo = ({ className = 'h-10 w-auto' }: { className?: string }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 180 50" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Aiveen Labs Logo"
    >
      <defs>
        <linearGradient id="logo-blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" /> {/* primary-500 */}
          <stop offset="100%" stopColor="#0284c7" /> {/* primary-600 */}
        </linearGradient>
        <linearGradient id="logo-red-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f87171" /> {/* secondary-400 */}
          <stop offset="100%" stopColor="#ef4444" /> {/* secondary-500 */}
        </linearGradient>
      </defs>
      
      <g>
        {/* The 'A' shape */}
        <path 
          d="M25,50 L50,5 L75,50 L65,50 L50,25 L35,50 Z" 
          fill="url(#logo-blue-gradient)"
        />
        
        {/* The swoosh */}
        <path 
          d="M5,40 C30,30 70,30 95,40" 
          fill="none" 
          stroke="url(#logo-red-gradient)" 
          strokeWidth="6" 
          strokeLinecap="round"
        />
      </g>

      <text 
        x="90" 
        y="35" 
        fontFamily="sans-serif" 
        fontSize="24" 
        fill="#075985" // primary-800
        fontWeight="bold"
      >
        Aiveen Labs
      </text>
    </svg>
  )
}

export default Logo; 