import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

const MovieCard = ({ movie }) => {
    console.log(movie);
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
                <Button variant="danger">Delete</Button>
            </Card.Footer>
        </Card>
    )
}

export default MovieCard
