import React from "react";
import { Form, Row, Col, Button, Container, } from "react-bootstrap"

const styles = {
    heading: {
        background: '#fff',
        margin: '1em 0 0.5em 0',
        color: '#343434',
        fontWeight: 'normal',
        fontfamily: "'Ultra', sans-serif",
        fontSize: '36px',
        lineHeight: '42px',
        textTransform: 'uppercase',
        textShadow: '2px 2px 4px #000000',
    },
    inputLabel: {
        margin: '1em 0 0.5em 0',
        color: '#fff',
        fontWeight: 'normal',
        fontfamily: "'Ultra', sans-serif",
        fontSize: '26px',
        lineHeight: '42px',
        textShadow: '2px 2px 4px #000000',
        textAlign: 'left'
    },
    textArea: {
        background: '#282c34',
        margin: '1em 0 0.5em 0',
        color: '#fff',
        fontWeight: 'normal',
        fontfamily: "'Ultra', sans-serif",
        fontSize: '22px',
        lineHeight: '42px',
        textShadow: '2px 2px 4px #000000',
        textAlign: 'left'
    },
    button: {
        background: '#282c34',
        margin: '1em 0 0.5em 0',
        color: '#fff',
        fontWeight: 'normal',
        fontfamily: "'Ultra', sans-serif",
        fontSize: '22px',
        lineHeight: '42px',
        textShadow: '2px 2px 4px #000000',
        textAlign: 'left',
        textTransform: 'uppercase',
        boxShadow: '4px 4px 10px 1px #2f3549',
        borderStyle: 'solid',
        borderColor: '#fff'

    }
};
function ContactMe() {
    return (
        <Container>
            <div style={styles.heading}><h1>Contact</h1></div>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <h2 style={styles.inputLabel}>Name</h2>
                        <Form.Control style={styles.textArea} type="text" placeholder="My Name is" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <h2 style={styles.inputLabel}>Email</h2>
                        <Form.Control style={styles.textArea} type="email" placeholder="Enter email" />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                    <h2 style={styles.inputLabel}>Message</h2>
                    <Form.Control as="textarea" style={styles.textArea} type="text" placeholder="Send me a Message" />
                </Form.Group>
                <Button style={styles.button} variant="primary" type="submit">
                    Send!
                </Button>
            </Form>
        </Container>
    )
}

export default ContactMe;