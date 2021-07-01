import useState from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
const ContactUs = () => {

    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [show, setShow] = useState(false);





    return (
        <Container>
            <Container>
                <h2>Contact Us</h2>
                <Form>
                    <Form.Group>
                        <Form.Label>Your First Name</Form.Label>
                        <Form.Control type="text" id="fName" onChange={(event) => { setFName(event.target.value) }} />
                        <Form.Label>Your Last Name</Form.Label>
                        <Form.Control type="text" id="lName" onChange={(event) => { setLName(event.target.value) }} />
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" id="email" placeholder="name@example.com" onChange={(event) => { setEmail(event.target.value) }} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Rate Our Performance(1-5)</Form.Label>
                        <Form.Control as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={5} />
                    </Form.Group>
                    <Form.Group>
                        <Button variant="primary" type="reset"> Reset</Button>
                        <Button variant="success" type="button" onClick={() => setShow(true)} > Submit</Button>
                    </Form.Group>
                </Form>
            </Container>
            <Container>
                <Modal show={show} >
                    <Modal.Header>
                        <Modal.Title>Submited</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Thank you for Your feedback {fName} {lName}, confirmation email has been sent to {email},</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </Container>

    );
}

export default ContactUs;