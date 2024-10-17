import React, { useContext } from 'react';
import { UserContext } from '../App';

export const Search = () => {
  const { username } = useContext(UserContext);

  return (
    <div>
      <h1>Hello, {username}</h1>
      <p>Let's Analyze some fruit</p>
      <input 
        placeholder="Type a fruit you'd like to analyze"
      />
    </div>
  );
};