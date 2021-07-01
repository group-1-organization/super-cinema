import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import axios from 'axios'




const MovieCard = ({ movie, setListChanged, handleShow }) => {

    const deleteMovie = () => {
        axios.delete("http://localhost:5000/cinema/movies/" + movie._id);
        setListChanged(true);
    }



    return (
        <Card>
            <Card.Img variant="top" src={movie.Poster} />
            <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item>Year: <b>{movie.Year}</b></ListGroup.Item>
                    <ListGroup.Item>Runtime: <b>{movie.Runtime}</b></ListGroup.Item>
                    <ListGroup.Item>Genre: <b>{movie.Genre}</b></ListGroup.Item>
                </ListGroup>
                <Card.Text>
                    {movie.Plot}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button type="button" variant="danger" onClick={deleteMovie} >Delete</Button>
                <Button variant="primary" onClick={handleShow} id={movie._id}>Launch demo modal</Button>
            </Card.Footer>
        </Card>
    )
}

export default MovieCard
