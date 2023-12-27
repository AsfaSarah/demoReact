import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err= useRouteError();
  return (
    <div>
    <h1>Page not found</h1>
    <h3>{err.status}</h3>
      
    </div>
  )
}

export default Error;
