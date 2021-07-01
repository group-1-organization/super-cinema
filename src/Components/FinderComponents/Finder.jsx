import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import React from 'react'

const Finder = () => {

    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [movieName, setMovieName] = useState('');
    const [movies, setMovies] = useState([]);



    return (
        <div>
            <h1>Finder</h1>
            <Form.Control type="text" placeholder="Search" value={movieName} onChange={(e) => setMovieName(e.target.value)} className="mt-3" />

        </div>
    )
}

export default Finder
