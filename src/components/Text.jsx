import React from 'react';

const Text = ({ 
  children, 
  tag = 'p', 
  className = '', 
  style = {},
  onClick,
  ...props 
}) => {
  const Component = tag;
  
  return (
    <Component 
      className={className}
      style={style}
      onClick={onClick}
      {...props} 
    >
      {children}
    </Component>
  );
};

export default Text;







