import * as React from 'react';
import "./error.css";

export const Error: React.FC<any> = () => {
  return (
      <div className="container">
          <h1 className="error-header">Oops! Page not found!</h1>
      </div>
  );
};
