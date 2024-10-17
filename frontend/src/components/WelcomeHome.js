import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../App'

export const WelcomeHome = () => {

    const navigate = useNavigate()
    const { username, setUsername } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(username)
        if (username.trim() !== '') {
            navigate('/search')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Hello, What is your name</h1>
                <input
                    onChange={e => setUsername(e.target.value)}
                    value={username}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}