import './App.css';
import React, { useState, createContext } from 'react';
import { WelcomeHome } from './components/WelcomeHome';
import { Search } from './components/Search';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

export const UserContext = createContext()

function App() {

  const [username, setUsername] = useState('')

  return (
    <div className="h-full">
      <UserContext.Provider value={{ username, setUsername }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<WelcomeHome />} />
            <Route path='/search' element={<Search />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
