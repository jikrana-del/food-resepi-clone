import React from 'react';

const PageNotFound = () => {
    return (
        <div style={styles.container}>
            <img
                src="https://media.istockphoto.com/id/855752978/photo/application-failed-businessman-having-problem-with-laptop-soft.jpg?s=2048x2048&w=is&k=20&c=dGu4RtTPRJI5rbag3FHmwjeJ75_WsGJ5tfuFPuYScXo=" // ✅ Working image
                alt="404 Not Found"
                style={styles.image}
            />
            <h1 style={styles.heading}>Oops! Page Not Found</h1>
            <p style={styles.text}>Sorry, the page you're looking for doesn't exist.</p>
            <a href="/" style={styles.button}>Go Back Home</a>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        padding: '40px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f9f9f9',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '60%',
        maxWidth: '500px',
        marginBottom: '20px',
    },
    heading: {
        fontSize: '2.5rem',
        color: '#333',
    },
    text: {
        fontSize: '1.2rem',
        color: '#777',
        marginBottom: '30px',
    },
    button: {
        padding: '12px 25px',
        backgroundColor: '#6c63ff',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '5px',
        fontWeight: 'bold',
        boxShadow: '0px 2px 10px rgba(0,0,0,0.2)',
    }
};

export default PageNotFound;
