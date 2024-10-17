import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

export const Search = () => {
  const navigate = useNavigate()
  const { username } = useContext(UserContext);
  const [fruits, setFruits] = useState([])
  const [query, setQuery] = useState('')
  const [selectedFruit, setSelectedFruit] = useState(null)

  useEffect(() => {
    const handleFruits = async () => {
      try {
        const response = await fetch('/fruits.json')
        const data = await response.json()
        setFruits(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    handleFruits()
    
  },[])

    const getFruit = (fruit) => {
      setSelectedFruit(fruit)
      setQuery('')
    }

    const fruitsListed = fruits.filter((fruit) => (
        fruit.name.toLowerCase().includes(query.toLowerCase())
      ))
  

  return (
    <div>
      <h1>Hello, {username ? username : 'I am your personal fruit assistant'}</h1>
      <p>Let's Analyze some fruit</p>
      <input 
        placeholder="Type a fruit you'd like to analyze"
        onChange={e => setQuery(e.target.value)}
        value={query}
      />
      {query && (
        <div>
          {/* {fruitsListed.map((fruit) => (
            <div key={fruit.name} onClick={getFruit(fruit)}>
              {fruit.name}
            </div>
          ))} */}
        </div>
      )}
      <div>
        <button onClick={() => navigate('/')}>Back</button>
      </div>
    </div>
  );
};