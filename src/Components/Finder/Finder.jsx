import { useState, useEffect } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'


const Finder = () => {

    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [movieName, setMovieName] = useState('');
    const [movies, setMovies] = useState([]);

    const [selectedMovie, setSelectedMovie] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setSelectedMovie([]);
    }
    const handleShow = (event) => {
        let id = event.target.getAttribute("imdbid");
        getMovieById(id);
        setShow(true);
    }

    const getMovieById = (id) => {
        axios.get(`https://www.omdbapi.com/?apikey=ad5280a&i=${id}`).then((response) => {
            setSelectedMovie(response.data);
        })
    }

    const addMovie = () => {
        let movie = {
            Title: selectedMovie.Title,
            Year: selectedMovie.Year,
            Runtime: selectedMovie.Runtime,
            Genre: selectedMovie.Genre,
            Plot: selectedMovie.Plot,
            Poster: selectedMovie.Poster
        }
        console.log(movie);
        axios.post(`http://localhost:5000/cinema/movies`, movie,
            {
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            }).then((response) => {
                console.log(response);
            })

        handleClose();
    }

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
                            <th className="w-0"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((movie, i) => (
                            <tr key={i}>
                                <td>{movie.Title}</td>
                                <td>{movie.Year}</td>
                                <td>
                                    <Button variant="primary" onClick={handleShow} imdbid={movie.imdbID}>
                                        Open
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                <Modal show={show} size="lg" onHide={addMovie}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedMovie.Title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
                        <ListGroup variant="flush">
                            <ListGroup.Item>Year: <b>{selectedMovie.Year}</b></ListGroup.Item>
                            <ListGroup.Item>Runtime: <b>{selectedMovie.Runtime}</b></ListGroup.Item>
                            <ListGroup.Item>Genre: <b>{selectedMovie.Genre}</b></ListGroup.Item>
                        </ListGroup>
                        <p>{selectedMovie.Plot}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="success" onClick={addMovie}>
                            Add to List
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div >
        )
    }


}

export default Finder
