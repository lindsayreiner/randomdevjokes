import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function GeekJoke() {
    const [joke, setJoke] = useState('');

    const fetchJoke = async () => {
        const config = {
            method: 'GET',
            url: 'https://geek-jokes.sameerkumar.website/api?format=json',
            headers: {
                'Accept': 'application/json'
            }
        }
        const { data: { joke } } = await axios(config)
        setJoke(joke)
    }

    useEffect(() => {
        fetchJoke();
    }, [])

    return (
        <>
            <h1 style={{ margin: '2rem' }}>{joke}</h1>
            <button><Link to="/joke" onClick={fetchJoke} className="jokeBtn">Get another geek joke</Link></button>
        </>
    )
}
