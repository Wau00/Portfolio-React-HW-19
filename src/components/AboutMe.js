
import React from "react";
import { Card } from "react-bootstrap"

const styles = {
    card: {
        margin: 20,
        background: '#282c34',
    },
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
    content: {
        padding: 20,
        color: '#fff'
    },
    hero: {
        width: '30%',
        height: 'auto',
        borderRadius: '30%',
    },
    h3: {
        margin: '10px',
        fontSize: '3rem',
        fontWeight: '300',
        lineHeight: '1.3'
    }
};

function AboutMe() {
    return (
        <div style={styles.card}>
            <div style={styles.heading}><h1>About Me</h1></div>
            <Card.Img style={styles.hero} variant="top" src='https://user-images.githubusercontent.com/99919050/171073578-2c7167f9-1324-4bb7-b191-2aea515e85ce.jpg' />
            <div style={styles.content}>
                <h3 style={styles.h3}>I am a multi-discipline Full Stack Developer who enjoys challenges of all shapes and sizes.</h3>

                <h4>I create webpages Back End — or server side — of the application as well as the Front End, or client side that stand out in today’s overstimulated world.

                    Ultimately creating webpages with MVC architecture to separate business logic and presentation details.</h4>
            </div>
        </div>
    );
}

export default AboutMe;