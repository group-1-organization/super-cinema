import { useState, useEffect } from 'react'
import axios from "axios";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MovieCard from './MovieCard';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const List = () => {

    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);

    const [show, setShow] = useState(false);

    const [movies, setMovies] = useState([]);
    const [listChanged, setListChanged] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        setShow(true);
        let id = e.target.getAttribute("id");
        getMovieById(id);
        console.log(selectedMovie);
    }

    useEffect(() => {
        getMovies();
        setListChanged(false)
    }, [listChanged])
    const getMovieById = (id) => {
        axios.get("http://localhost:5000/cinema/movies/" + id).then((response) => {
            console.log(response.data);
            setSelectedMovie(response.data);

        })
    }
    const getMovies = () => {
        axios.get("http://localhost:5000/cinema/movies").then((response) => {
            setMovies(response.data);
        })
    }
    const updateMovie = () => {
        // updatedMovie = {
        // }
        // axios.patch("http://localhost:5000/cinema/movies/")
    }

    return (
        <div>
            <h1>My Movies</h1>
            <Row xs={1} lg={3}>
                {movies.map((movie, i) => (
                    <Col key={i} className="mt-4">
                        <MovieCard movie={movie} setListChanged={setListChanged} handleShow={handleShow} />
                    </Col>
                ))}
            </Row>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form >

                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={updateMovie}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default List