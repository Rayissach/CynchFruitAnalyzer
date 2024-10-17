import React, {useState} from 'react'

export const WelcomeHome = () => {
    const [username, setUsername] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(username)
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