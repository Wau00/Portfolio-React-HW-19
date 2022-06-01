import React, { useState } from "react";
import { Form, Row, Col, Button, Container, } from "react-bootstrap"
import { validateEmail } from '../utils/helpers';
const styles = {
    heading: {
        background: '#6c757d',
        margin: '1em 0 0.5em 0',
        color: '#fff',
        fontWeight: 'normal',
        fontfamily: "'Ultra', sans-serif",
        fontSize: '36px',
        lineHeight: '42px',
        textTransform: 'uppercase',
        textShadow: '2px 2px 4px #000000',
    },
    error: {
        margin: '1em 0 0.5em 0',
        background: 'red',
        color: '#fff',
        fontWeight: 'normal',
        fontfamily: "'Ultra', sans-serif",
        fontSize: '36px',
        lineHeight: '42px',
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

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }
        if (message === '') {
            setErrorMessage(
                `Please send a Message!`
            );
            return;
        }
        setName('');
        setMessage('');
        setEmail('');
        setErrorMessage('');

    };
    return (
        <Container>
            <div style={styles.heading}><h1>Contact</h1></div>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <h2 style={styles.inputLabel}>Name</h2>
                        <Form.Control style={styles.textArea} type="text" value={name}
                            name="name"
                            onChange={handleInputChange} placeholder="My Name is" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <h2 style={styles.inputLabel}>Email</h2>
                        <Form.Control style={styles.textArea} value={email}
                            name="email"
                            onChange={handleInputChange} type="email" placeholder="Enter email" />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                    <h2 style={styles.inputLabel}>Message</h2>
                    <Form.Control as="textarea" style={styles.textArea} value={message}
                        name="message"
                        onChange={handleInputChange} type="text" placeholder="Send me a Message" />
                </Form.Group>
                <Button style={styles.button} variant="primary" type="submit" onClick={handleFormSubmit}>
                    Send!
                </Button>
            </Form>
            {errorMessage && (
                <div>
                    <p className="error-text" style={styles.error}>{errorMessage}</p>
                </div>
            )}
        </Container>
    )
}

export default ContactMe;