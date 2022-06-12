import React, { useState } from 'react';
import './App.css';
import SignIn from './components/SignIn/SignIn';
import SendPage from './components/SendPage/SendPage';


function App() {
    const [user, setUser] = useState(localStorage.getItem('user') || '');

    const signIn = (user: string) => {
        localStorage.setItem('user', user);
        setUser(user)
    }


    const signOut = () => {
        localStorage.removeItem('user')
        setUser('');
    }


    return (
        <div className="App">
            {user ? (<SendPage user={user} signOut={signOut} />) : (<SignIn signIn={signIn} />)}
        </div>
    );
}

export default App;
