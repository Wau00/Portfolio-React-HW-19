import React from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap"

function ContactMe() {
    return (
        <Container>
            <div><h1>Contact</h1></div>
            <Form>
                <Row className="mb-3">
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control placeholder="My name is..." />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" placeholder="Send me a Message" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Send!
                </Button>
            </Form>
        </Container>
    )
}

export default ContactMe;