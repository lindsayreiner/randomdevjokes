import React from 'react';
import { Link } from 'react-router-dom'

import Header from '../components/Header';
// import GeekJoke from '../components/GeekJoke';
import Footer from '../components/Footer';


export default function Home() {
    return (
        <>
            <Header />
            <h1>Welcome to the Geek Joke Application</h1>
            <button><Link to="/joke" className="jokeBtn">Get a geek joke</Link></button>
            <Footer />
        </>
    )
}
