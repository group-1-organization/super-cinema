import { useState, useEffect } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'

const Finder = () => {

    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [movieName, setMovieName] = useState('');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?apikey=ad5280a&s=${movieName}`).then((response) => {
            setLoaded(true);
            if (response.data.Response !== "False") {
                setMovies(response.data.Search);
            } else {
                setMovies([]);
            }
        }).catch((error) => {
            setLoaded(true);
            setError(error);
        })
    }, [movieName])

    if (error) {
        return <p>Oops, something went wrong! {error.message}</p>
    } else if (!loaded) {
        return <p>Loading...</p>
    } else {
        return (
            <div>
                <h1>Finder</h1>
                <Form.Control type="text" placeholder="Search" value={movieName} onChange={(e) => setMovieName(e.target.value)} className="mt-3" />

                <Table striped bordered hover className="mt-3">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Year</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((movie) => (
                            <tr>
                                <td>{movie.Title}</td>
                                <td>{movie.Year}</td>
                                <td>button</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }


}

export default Finder
