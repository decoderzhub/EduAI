import React from 'react';

const Image = ({ 
  src, 
  alt = '', 
  className = '', 
  style = {},
  width,
  height,
  onClick,
  loading = 'lazy',
  ...props 
}) => {
  return (
    <img 
      src={src}
      alt={alt}
      className={className}
      style={style}
      width={width}
      height={height}
      loading={loading}
      onClick={onClick}
      {...props}
    />
  );
};

export default Image;







