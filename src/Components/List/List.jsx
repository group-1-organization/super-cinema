import { useState, useEffect } from 'react'
import axios from "axios";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MovieCard from './MovieCard';

const List = () => {

    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies();
    }, [loaded])

    const getMovies = () => {
        axios.get("http://localhost:5000/cinema/movies").then((response) => {
            setMovies(response.data);
        })
    }

    return (
        <div>
            <h1>My Movies</h1>
            <Row xs={1} lg={3}>
                {movies.map((movie) => (
                    <Col className="mt-4">
                        <MovieCard movie={movie} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default List