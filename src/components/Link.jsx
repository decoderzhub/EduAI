import React from 'react';

const Link = ({ 
  children, 
  href, 
  className = '', 
  style = {},
  target,
  rel,
  onClick,
  ...props 
}) => {
  // If it's an external link, add default rel="noopener noreferrer" for security
  const linkRel = target === '_blank' && !rel ? 'noopener noreferrer' : rel;
  
  return (
    <a 
      href={href}
      className={className}
      style={style}
      target={target}
      rel={linkRel}
      onClick={onClick}
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;







