import React, { useContext } from 'react';
import { UserContext } from './WelcomeHome';

export const Search = () => {
  const { username } = useContext(UserContext);

  return (
    <div>
      <h1>Hello: {username}</h1>
    </div>
  );
};