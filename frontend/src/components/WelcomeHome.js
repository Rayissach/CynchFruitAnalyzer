import React, {useState, createContext} from 'react'

const UserContext = createContext()

export const WelcomeHome = () => {

    const [username, setUsername] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(username)
    }

    return (
        <div>
            <UserContext.Provider value={{ username, setUsername}}>
                <form onSubmit={handleSubmit}>
                    <h1>Hello, What is your name</h1>
                    <input
                        onChange={e => setUsername(e.target.value)}
                        value={username}
                    />
                    <button type='submit'>Submit</button>
                </form>
            </UserContext.Provider>
        </div>
    )
}

export {UserContext}