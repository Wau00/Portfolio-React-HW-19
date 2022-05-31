import React from "react";

const styles = {
    footer: {
        margin: 20,
        color: '#fff',
        justifyContent: 'center',
        padding: '10%'
    },
    content: {
        color: '#fff',
        textDecoration: 'none',
        padding: '10px',
        margin: '1em 0 0.5em 0',
        fontWeight: 'normal',
        fontfamily: "'Ultra', sans-serif",
        lineHeight: '42px',
        textShadow: '2px 2px 4px #000000',
    }
};

function Footer() {
    return (
        <footer className="container mb-10">
            <ul style={styles.footer} className="list-unstyled d-flex mt-5 mb-4">
                <li className="me-7"><a style={styles.content} href="https://github.com/Wau00">GitHub</a></li>
                <li className="me-7"><a style={styles.content} href="tel:469-662-2739">Phone</a></li>
                <li className="me-7"><a style={styles.content}
                    href="https://www.linkedin.com/in/walter-alonso-underwood-291524234/">LinkedIn</a></li>
                <li className="me-7"><a style={styles.content}
                    href="https://www.instagram.com/underwooh/">Instagram</a></li>
            </ul>
        </footer>
    )
}

export default Footer;