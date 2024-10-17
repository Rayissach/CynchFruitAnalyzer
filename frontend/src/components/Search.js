import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../App';

export const Search = () => {
  const { username } = useContext(UserContext);
  const [fruits, setFruits] = useState([])

  useEffect(() => {
    const handleFruits = async () => {
      const response = await fetch('../public/fruits.json')
      const data = response.json()
      setFruits(data)
    }
    handleFruits()
  },[])

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