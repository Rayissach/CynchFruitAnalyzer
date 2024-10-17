import React, {useState, createContext} from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

export const UserContext = createContext()

export const WelcomeHome = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(username)
        if (username.trim() !== '') {
            navigate('search')
        }
    }

    return (
        <div>
            <h1>Hello</h1>
            <UserContext.Provider value={{ username, setUsername }}>
                <form onSubmit={handleSubmit}>
                    <h1>Hello, What is your name</h1>
                    <input
                        onChange={e => setUsername(e.target.value)}
                        value={username}
                    />
                    <button type='submit'>Submit</button>
                </form>
                <Outlet />
            </UserContext.Provider>
        </div>
    )
}