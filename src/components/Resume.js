import React from "react";
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
    card: {
        marginLeft: '50px',
        color: '#ffff',
        fontWeight: 'normal',
        fontfamily: "'Ultra', sans-serif",
        lineHeight: '42px',
        textShadow: '2px 2px 4px #000000',
    },
    resume: {
        textAlign: 'left',
        marginTop: '2.3rem',
    },
    resumeHref: {
        textDecoration: 'none',
        color: '#fff',
        border: '2px solid',
        borderRadius: '30%',
        background: '#6c757d',
        padding: '10px',
        textTransform: 'uppercase',
    },
    listItems: {
        textAlign: 'left',
        fontSize: '22px',
    },
    listTitle: {
        marginTop: '40px',
        textAlign: 'left',
        fontSize: '28px',
        border: '2px solid',
    }
}
function Resume() {
    return (
        <div style={styles.card}>
            <div style={styles.heading}><h1>Resume</h1></div>
            <ul><h4 style={styles.listTitle}>Front-end Proficiencies</h4>
                <li style={styles.listItems}>+ HTML</li>
                <li style={styles.listItems}>+ CSS</li>
                <li style={styles.listItems}>+ JavaScript</li>
                <li style={styles.listItems}>+ React</li>
                <li style={styles.listItems}>+ Responsive Design</li>
                <li style={styles.listItems}>+ Bootstrap</li>
            </ul>
            <ul><h4 style={styles.listTitle}>Back-end Proficiencies</h4>
                <li style={styles.listItems}>+ APIs</li>
                <li style={styles.listItems}>+ Node</li>
                <li style={styles.listItems}>+ Express</li>
                <li style={styles.listItems}>+ MySQL, Sequelize</li>
                <li style={styles.listItems}>+ MongoDb, Mongoose</li>
                <li style={styles.listItems}>+ Rest</li>
            </ul>
            <ul><h4 style={styles.resume}>Download My <a style={styles.resumeHref} target="_blank" href='https://raw.githubusercontent.com/Wau00/My-New-Portofolio-/main/Assets/img/Resume.png'>Resume</a></h4></ul>
        </div>
    )
}

export default Resume;