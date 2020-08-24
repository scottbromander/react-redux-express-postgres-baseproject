import React from 'react';

export default function LoadingIndicator(props) {
  const { isActive = false } = props;
  const { children } = props;

  return (
    <div>
      {isActive && (
        <div>
          <h1>Loading</h1>
        </div>
      )}
      {children}
    </div>
  );
}
