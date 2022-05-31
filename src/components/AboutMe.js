
import React from "react";
import { Card } from "react-bootstrap"


function AboutMe() {
    return (
        <div style={styles.card}>
            <div style={styles.heading}><h3>About Me</h3></div>
            <Card.Img style={styles.hero} variant="top" src='https://user-images.githubusercontent.com/99919050/171073578-2c7167f9-1324-4bb7-b191-2aea515e85ce.jpg' />
            <div style={styles.content}>
                <h3 style={styles.h3}>I am a multi-discipline Full Stack Developer who enjoys challenges of all shapes and sizes.</h3>

                <p>I create webpages Back End — or server side — of the application as well as the Front End, or client side that stand out in today’s overstimulated world.

                    Ultimately creating webpages with MVC architecture to separate business logic and presentation details.</p>
            </div>
        </div>
    )
}

export default AboutMe;